from fastapi import FastAPI
from fastapi_cache import FastAPICache
from fastapi_cache.backends.inmemory import InMemoryBackend
from starlette.middleware.cors import CORSMiddleware
from tortoise.contrib.fastapi import register_tortoise

from app import config

from .routers import guild, oauth, user

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


app.include_router(oauth.router, prefix="/oauth")
app.include_router(user.router, prefix="/users")
app.include_router(guild.router, prefix="/guilds")


@app.get("/")
async def root():
    return {"ping": "pong"}


@app.on_event("startup")
async def startup():
    FastAPICache.init(InMemoryBackend(), prefix="fastapi-cache")


register_tortoise(
    app,
    config=config.TORTOISE,
    generate_schemas=True,
    add_exception_handlers=True,
)
