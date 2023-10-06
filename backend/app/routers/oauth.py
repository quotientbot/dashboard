from fastapi import APIRouter, Query, HTTPException, Response
from pydantic import BaseModel
from app.models import WebAuth
from app import config
import httpx
import secrets
from datetime import datetime, timedelta
import pytz

router = APIRouter()


class ExchangeResponse(BaseModel):
    access_token: str
    expires_in: int
    refresh_token: str


async def generate_unique_token():
    token = secrets.token_urlsafe(32)
    while await WebAuth.exists(user_token=token):
        token = secrets.token_urlsafe(32)

    return token


@router.get("/")
async def _oauth(code: str = Query(..., title="Authorization code from Discord.")):
    # Step 1: Exchange authorization code for access token
    token_url = config.DISCORD_API_ENDPOINT + "/oauth2/token"
    token_data = {
        "client_id": config.CLIENT_ID,
        "client_secret": config.CLIENT_SECRET,
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": config.REDIRECT_URI,
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(token_url, data=token_data)
        if response.status_code != 200:
            raise HTTPException(
                status_code=response.status_code,
                detail="Failed to exchange code for access token",
            )

    token_response = ExchangeResponse(**response.json())
    user_token = await generate_unique_token()

    await WebAuth.create(
        user_token=user_token,
        access_token=token_response.access_token,
        refresh_token=token_response.refresh_token,
        expires_at=datetime.now(tz=pytz.timezone("Asia/Kolkata"))
        + timedelta(seconds=token_response.expires_in),
    )

    response = Response(content=user_token)
    response.set_cookie(key="user_token", value=user_token)
    return response
