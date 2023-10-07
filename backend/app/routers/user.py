from fastapi import APIRouter, Depends
from app.utils import checks
from app.config import DISCORD_API_ENDPOINT, BOT_TOKEN
import httpx
from fastapi_cache.decorator import cache


router = APIRouter()


@router.get("/@me")
@cache(expire=60)
async def _me(user: dict = Depends(checks.get_user_details)):
    return user


@router.get("/@me/guilds")
@cache(expire=60)
async def get_user_guilds(user: dict = Depends(checks.get_user_details)):
    discord_url = DISCORD_API_ENDPOINT + "/users/@me/guilds"
    headers = {
        "Authorization": f"Bearer {user['access_token']}",
    }

    # Get user's guilds
    async with httpx.AsyncClient() as client:
        response = await client.get(discord_url, headers=headers)
        if response.status_code != 200:
            return response.json()

    user_guilds = response.json()

    # Get bot's guilds
    headers = {
        "Authorization": f"Bot {BOT_TOKEN}",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(discord_url, headers=headers)
        if response.status_code != 200:
            return response.json()

    bot_guilds = response.json()

    mutual_guilds = []
    for user_guild in user_guilds:
        for bot_guild in bot_guilds:
            if (
                user_guild["id"] == bot_guild["id"]
                and (int(user_guild["permissions"]) & 0x00000020) == 0x00000020
            ):
                mutual_guilds.append(user_guild)

    return mutual_guilds
