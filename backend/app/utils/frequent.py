import httpx
from app.config import (
    DISCORD_API_ENDPOINT,
    BOT_TOKEN,
    PRO_BOT_TOKEN,
    DEFAULT_ICON_URL,
    DISCORD_CDN_ENDPOINT,
)
from fastapi_cache.decorator import cache


@cache(expire=60)
async def get_user_guilds(access_token: str):
    """
    Get user's guilds.

    Parameters
    ----------
    access_token : str
        User's access token.
    """

    discord_url = DISCORD_API_ENDPOINT + "/users/@me/guilds"
    headers = {
        "Authorization": f"Bearer {access_token}",
    }

    # Get user's guilds
    async with httpx.AsyncClient() as client:
        response = await client.get(discord_url, headers=headers)
        if response.status_code != 200:
            raise Exception(response.json())

    return response.json()


@cache(expire=60)
async def get_mutual_guilds(access_token: str, pro: bool = False):
    """
    Get user's mutual guilds with Bot.

    Parameters
    ----------
    access_token : str
        User's access token.
    pro : bool, optional
        Whether to get mutual guilds with Quotient Pro or Quotient Basic, by default Quotient Basic.
    """
    user_guilds = await get_user_guilds(access_token)

    # Get bot's guilds
    discord_url = DISCORD_API_ENDPOINT + "/users/@me/guilds"
    headers = {
        "Authorization": f"Bot {BOT_TOKEN if not pro else PRO_BOT_TOKEN}",
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
                if user_guild["icon"] is None:
                    user_guild["icon"] = DEFAULT_ICON_URL

                else:
                    user_guild["icon"] = (
                        DISCORD_CDN_ENDPOINT
                        + "/icons/"
                        + user_guild["id"]
                        + "/"
                        + user_guild["icon"]
                        + ".png"
                    )
                mutual_guilds.append(user_guild)

    return mutual_guilds
