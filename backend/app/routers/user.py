from fastapi import APIRouter, Depends
from app.utils import checks, frequent
from fastapi_cache.decorator import cache


router = APIRouter()


@router.get("/@me")
@cache(expire=60)
async def me(user: dict = Depends(checks.get_user_details)):
    """
    Get current user's details.
    """
    return user


@router.get("/@me/guilds")
@cache(expire=60)
async def get_user_guilds(
    pro: bool = False,
    user: dict = Depends(checks.get_user_details),
):
    """
    Get current user's mutual guilds with Quotient.
    """
    return await frequent.get_mutual_guilds(user["access_token"], pro=pro)
