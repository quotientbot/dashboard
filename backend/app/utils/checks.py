import httpx
from fastapi import Header, HTTPException
from fastapi_cache.decorator import cache

from app.config import DISCORD_API_ENDPOINT
from app.models import WebAuth


@cache(expire=20)
async def get_user_details(token: str = Header(...)):
    # Check if the user_token cookie exists
    if not token:
        raise HTTPException(status_code=401, detail="User token is missing")

    # Retrieve user details from the db based on the token
    user = await WebAuth.get_or_none(user_token=token)

    if user is None:
        raise HTTPException(status_code=401, detail="Invalid user token")

    # Retrieve user details from Discord using the token
    user_details = await retrieve_user_details_from_discord(user.access_token)
    if user_details is None:
        raise HTTPException(status_code=401, detail="Failed to fetch user details from Discord")

    return user_details


@cache(expire=60)
async def retrieve_user_details_from_discord(user_token: str):
    discord_url = DISCORD_API_ENDPOINT + "/users/@me"
    headers = {
        "Authorization": f"Bearer {user_token}",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(discord_url, headers=headers)
        if response.status_code != 200:
            return None

    res = response.json()
    res["access_token"] = user_token
    return res
