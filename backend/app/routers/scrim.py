from fastapi import APIRouter, Depends
from app.utils import checks
from fastapi_cache.decorator import cache
from app.models import Scrim

router = APIRouter()


@router.get("/{guild_id}", response_model=list[Scrim])
async def get_all_scrims(
    guild_id: str,
    pro: bool = False,
    user: dict = Depends(checks.get_user_details),
):
    """
    Get a list of all scrims in a guild (sorted by open time ascending)
    """
    ...


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
