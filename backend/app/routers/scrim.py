from fastapi import APIRouter, Depends
from app.utils import checks
from fastapi_cache.decorator import cache
from app.models import Scrim
from asyncpg import Pool

router = APIRouter()


@router.get("/{guild_id}", response_model=list[Scrim])
async def get_all_scrims(
    db: Pool = Depends(checks.get_db),
    guild: dict = Depends(checks.get_mutual_guild),
):
    """
    Get a list of all scrims in a guild (sorted by open time ascending)
    """
    return await db.fetch(
        """SELECT * FROM public."sm.scrims" WHERE guild_id = $1 ORDER BY open_time ASC""",
        int(guild["id"]),
    )


@router.put("/{guild_id}", response_model=Scrim)
async def create_new_scrim(
    guild_id: str,
    pro: bool = False,
    user: dict = Depends(checks.get_user_details),
):
    """
    Create a new Scrim.
    """
    ...


@router.patch("/{guild_id}/{scrim_id}", response_model=Scrim)
async def update_scrim(
    guild_id: str,
    scrim_id: str,
    pro: bool = False,
    user: dict = Depends(checks.get_user_details),
):
    """
    Modify an existing scrim.
    """
    ...


@router.delete("/{guild_id}/{scrim_id}")
@cache(expire=10)
async def delete_scrim(
    guild_id: str,
    scrim_id: str,
    pro: bool = False,
    user: dict = Depends(checks.get_user_details),
):
    """
    Delete an existing scrim.
    """
    ...
