from app import config
from fastapi import FastAPI
from .routers import oauth, user
from tortoise.contrib.fastapi import register_tortoise


app = FastAPI()
app.include_router(oauth.router, prefix="/oauth")
app.include_router(user.router, prefix="/users")


@app.get("/")
async def root():
    return {"ping": "pong"}


register_tortoise(
    app,
    config=config.TORTOISE,
    generate_schemas=True,
    add_exception_handlers=True,
)
