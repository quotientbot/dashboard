from fastapi import APIRouter, Depends
from typing import List

from app.utils import checks, frequent
from app.models import Guild
from fastapi_cache.decorator import cache

router = APIRouter()


@router.get("/{guild_id}")
@cache(expire=30)
async def get_guild(
    guild_id: str, pro: bool = False, user: dict = Depends(checks.get_user_details)
):
    """
    Get details of a mutual guild.
    """
    guilds: List[dict] = await frequent.get_mutual_guilds(user["access_token"], pro)
    for guild in guilds:
        if guild["id"] == guild_id:
            record = await Guild.get_or_none(guild_id=guild_id)
            if not record:
                record = await Guild.create(guild_id=guild_id)

            # merge record & guild obj from discord API
            guild.update(record.__dict__)
            return guild

    return None
