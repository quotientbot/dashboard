from fastapi import APIRouter, Depends

from app.utils import checks, frequent
from app.models import Guild, WebLog, WebLog_Pydantic
from fastapi_cache.decorator import cache

router = APIRouter()


@router.get("/{guild_id}")
@cache(expire=10)
async def get_guild(
    guild_id: str, pro: bool = False, user: dict = Depends(checks.get_user_details)
):
    """
    Get details of a mutual guild.
    """
    guild: dict = await frequent.get_mutual_guild(guild_id, user["access_token"], pro)
    if not guild:
        return None

    record = await Guild.get_or_none(guild_id=guild_id)
    if not record:
        record = await Guild.create(guild_id=guild_id)

    # merge record & guild obj from discord API
    guild.update(record.__dict__)
    return guild


@router.get("/{guild_id}/logs", status_code=200, response_model=list[WebLog_Pydantic])
@cache(expire=10)
async def get_guild_logs(
    guild_id: str, pro: bool = False, user: dict = Depends(checks.get_user_details)
):
    """
    Get logs of a mutual guild.
    """
    guild: dict = await frequent.get_mutual_guild(guild_id, user["access_token"], pro)
    if not guild:
        return None

    return await WebLog_Pydantic.from_queryset(
        WebLog.filter(guild_id=guild_id).order_by("-created_at")
    )
