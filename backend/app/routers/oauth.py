from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def _oauth(code: str):
    return {"code": code}
