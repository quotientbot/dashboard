from fastapi import APIRouter, Depends

from app.utils import checks, frequent

router = APIRouter()


@router.get("/{guild_id}")
async def get_guild(
    guild_id: str, pro: bool = False, user: dict = Depends(checks.get_user_details)
):
    """
    Get details of a mutual guild.
    """
    guilds = await frequent.get_mutual_guilds(user["access_token"], pro)
    for guild in guilds:
        if guild["id"] == guild_id:
            return guild

    return None
