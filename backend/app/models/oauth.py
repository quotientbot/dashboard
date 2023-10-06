from tortoise import models, fields

__all__ = ("WebAuth",)


class WebAuth(models.Model):
    class Meta:
        table = "dashboard_auths"

    user_id = fields.BigIntField(pk=True, generated=False)
    access_token = fields.CharField(max_length=255)
    refresh_token = fields.CharField(max_length=255)
    expires_at = fields.DatetimeField()
