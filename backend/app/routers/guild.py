from fastapi import APIRouter, Depends

from app.utils import checks, frequent
from app.models import (
    Guild,
    WebLog,
    WebLog_Pydantic,
    Guild_Pydantic,
    GuildRole_Pydantic,
    TextChannel_Pydantic,
)
from fastapi_cache.decorator import cache

router = APIRouter()


@router.get("/{guild_id}", response_model=Guild_Pydantic)
@cache(expire=10)
async def get_guild(guild: dict = Depends(checks.get_mutual_guild)):
    """
    Get details of a mutual guild.
    """

    record = await Guild.get_or_none(guild_id=guild["id"])
    if not record:
        record = await Guild.create(guild_id=guild["id"])

    # merge record & guild obj from discord API
    guild.update(record.__dict__)
    return Guild_Pydantic(**guild)


@router.get("/{guild_id}/logs", status_code=200, response_model=list[WebLog_Pydantic])
@cache(expire=10)
async def get_guild_logs(guild: dict = Depends(checks.get_mutual_guild)):
    """
    Get logs of a mutual guild.
    """
    return await WebLog_Pydantic.from_queryset(
        WebLog.filter(guild_id=guild["id"]).order_by("-created_at")
    )


@router.get("/{guild_id}/channels", response_model=list[TextChannel_Pydantic])
@cache(expire=60)
async def get_text_channels(
    pro: bool = False,
    guild: dict = Depends(checks.get_mutual_guild),
):
    """
    Get text channels of a mutual guild.
    """
    return await frequent.get_text_channels(guild["id"], pro)


@router.get("/{guild_id}/roles", response_model=list[GuildRole_Pydantic])
@cache(expire=60)
async def get_guild_roles(
    pro: bool = False,
    guild: dict = Depends(checks.get_mutual_guild),
):
    """
    Get roles of a mutual guild.
    """
    return await frequent.get_guild_roles(guild["id"], pro)
