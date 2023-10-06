from app import config
from fastapi import FastAPI
from .routers import oauth
from tortoise.contrib.fastapi import register_tortoise


app = FastAPI()
app.include_router(oauth.router, prefix="/oauth")


@app.get("/")
async def root():
    return {"ping": "pong"}


register_tortoise(
    app,
    config=config.TORTOISE,
    generate_schemas=True,
    add_exception_handlers=True,
)
