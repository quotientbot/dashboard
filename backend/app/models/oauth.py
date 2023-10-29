from tortoise import fields, models

__all__ = ("WebAuth",)


class WebAuth(models.Model):
    class Meta:
        table = "dashboard_auths"

    id = fields.IntField(pk=True)
    user_token = fields.CharField(unique=True, max_length=255)
    access_token = fields.CharField(max_length=255)
    refresh_token = fields.CharField(max_length=255)
    created_at = fields.DatetimeField(auto_now=True)
    expires_at = fields.DatetimeField()
