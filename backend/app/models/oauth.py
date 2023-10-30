from tortoise import fields, models
from enum import IntEnum

__all__ = ("WebAuth", "WebLog", "WebLogType")


class WebAuth(models.Model):
    class Meta:
        table = "dashboard_auths"

    id = fields.IntField(pk=True)
    user_token = fields.CharField(unique=True, max_length=255)
    access_token = fields.CharField(max_length=255)
    refresh_token = fields.CharField(max_length=255)
    created_at = fields.DatetimeField(auto_now=True)
    expires_at = fields.DatetimeField()


class WebLogType(IntEnum):
    prefix_update = 0
    footer_update = 1
    color_update = 2

    premium_purchase = 3
    premium_extend = 4

    scrim_create = 5
    scrim_delete = 6
    scrim_update = 7

    tourny_create = 8
    tourny_delete = 9
    tourny_update = 10


class WebLog(models.Model):
    class Meta:
        table = "dashboard_logs"

    id = fields.IntField(pk=True)
    user_id = fields.BigIntField()
    username = fields.CharField(max_length=255)
    action_type = fields.IntEnumField(WebLogType)
    action_msg = fields.CharField(max_length=255)
    created_at = fields.DatetimeField(auto_now=True)
