# Dependencies used across the app

import httpx
from fastapi import Header, HTTPException, Depends
from fastapi_cache.decorator import cache

from app.config import DISCORD_API_ENDPOINT
from app.models import WebAuth
from .frequent import get_mutual_guilds


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


@cache(expire=20)
async def get_user_details(token: str = Header(...)):
    # Check if the token Header exists
    if not token:
        raise HTTPException(status_code=401, detail="User token is missing")

    # Retrieve user details from the db based on the token
    user = await WebAuth.get_or_none(user_token=token)

    if user is None:
        raise HTTPException(status_code=401, detail="Invalid user token")

    # Retrieve user details from Discord using the token
    user_details = await retrieve_user_details_from_discord(user.access_token)
    if user_details is None:
        raise HTTPException(
            status_code=401, detail="Failed to fetch user details from Discord"
        )

    return user_details


@cache(expire=60)
async def get_mutual_guild(
    guild_id: str,
    pro: bool = False,
    user: dict = Depends(get_user_details),
):
    """
    Get a user's mutual guild with Bot.

    Parameters
    ----------
    guild_id : str
        Guild ID.
    pro : bool, optional
        Whether to get mutual guilds with Quotient Pro or Quotient Basic, by default Quotient Basic.
    user: dict
        The user who's mutul guild is required.
    """
    guilds = await get_mutual_guilds(user["access_token"], pro)

    for guild in guilds:
        if guild["id"] == guild_id:
            return guild

    raise HTTPException(status_code=401, detail="Invalid Guild Requested.")
