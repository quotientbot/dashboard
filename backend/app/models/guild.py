from tortoise import fields, models
from pydantic import BaseModel, validator
from datetime import datetime

__all__ = (
    "Guild",
    "Guild_Pydantic",
    "GuildRole_Pydantic",
    "TextChannel_Pydantic",
    "PermissionOverwrite_Pydantic",
)


class Guild(models.Model):
    class Meta:
        table = "guild_data"

    guild_id = fields.BigIntField(pk=True, index=True, generated=False)

    prefix = fields.CharField(default="q", max_length=5)
    embed_color = fields.IntField(default=65459, null=True)
    embed_footer = fields.TextField(default="Quotient • quotientbot.xyz")

    is_premium = fields.BooleanField(default=False)
    made_premium_by = fields.BigIntField(null=True)
    premium_end_time = fields.DatetimeField(null=True)


class Guild_Pydantic(BaseModel):
    # Req details from DB
    prefix: str
    embed_color: int
    embed_footer: str
    is_premium: bool | None
    made_premium_by: int | None
    premium_end_time: datetime | None

    # Req details from Discord
    id: str
    name: str
    icon: str


class PermissionOverwrite_Pydantic(BaseModel):
    id: str
    type: int
    allow: str
    deny: str


class GuildRole_Pydantic(BaseModel):
    id: str
    name: str
    color: int
    permissions: str
    position: int
    hoist: bool
    managed: bool
    mentionable: bool


class TextChannel_Pydantic(BaseModel):
    id: str
    type: int
    name: str
    parent_id: str
    position: int
    nsfw: bool
    permission_overwrites: list[PermissionOverwrite_Pydantic]
