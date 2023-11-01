import httpx
from fastapi_cache.decorator import cache

from app.config import (
    BOT_TOKEN,
    DEFAULT_ICON_URL,
    DISCORD_API_ENDPOINT,
    DISCORD_CDN_ENDPOINT,
    PRO_BOT_TOKEN,
)


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
            raise Exception(response.json())

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


@cache(expire=60)
async def get_text_channels(guild_id: str, pro: bool = False):
    """
    Get a guild's text channels.

    Parameters
    ----------
    guild_id : str
        Guild ID.
    pro : bool, optional
        Whether to get mutual guilds with Quotient Pro or Quotient Basic, by default Quotient Basic.
    """

    discord_url = DISCORD_API_ENDPOINT + f"/guilds/{guild_id}/channels"
    headers = {
        "Authorization": f"Bot {BOT_TOKEN if not pro else PRO_BOT_TOKEN}",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(discord_url, headers=headers)
        if response.status_code != 200:
            raise Exception(response.json())

    channels = response.json()
    text_channels = []
    for channel in channels:
        if channel["type"] == 0:
            text_channels.append(channel)

    return text_channels


@cache(expire=60)
async def get_guild_roles(guild_id: str, pro: bool = False):
    """
    Get a guild's roles.

    Parameters
    ----------
    guild_id : str
        Guild ID.
    pro : bool, optional
        Whether to get mutual guilds with Quotient Pro or Quotient Basic, by default Quotient Basic.
    """
    discord_url = DISCORD_API_ENDPOINT + f"/guilds/{guild_id}/roles"
    headers = {
        "Authorization": f"Bot {BOT_TOKEN if not pro else PRO_BOT_TOKEN}",
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(discord_url, headers=headers)
        if response.status_code != 200:
            raise Exception(response.json())

    roles = roles.json()
    needed_roles = []
    for role in roles:
        if role["managed"] is False:
            needed_roles.append(role)

    return roles
