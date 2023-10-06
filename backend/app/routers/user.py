from fastapi import APIRouter, Depends
from app.utils import checks

router = APIRouter()


@router.get("/@me")
async def _me(user: dict = Depends(checks.get_user_details)):
    return user
