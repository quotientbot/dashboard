from pydantic import BaseModel
from datetime import datetime
from enum import Enum


class Day(Enum):
    monday = "monday"
    tuesday = "tuesday"
    wednesday = "wednesday"
    thursday = "thursday"
    friday = "friday"
    saturday = "saturday"
    sunday = "sunday"


class AutocleanType(Enum):
    channel = "channel"
    role = "role"


class Scrim(BaseModel):
    # mimics: https://github.com/quotientbot/Quotient-Bot/blob/8e08e9c808730838e2bdd5f45fd96c97a0c626c2/src/models/esports/scrims.py#L23

    id: int
    guild_id: int
    name: str = "Quotient-Scrims"
    registration_channel_id: int
    slotlist_channel_id: int
    slotlist_message_id: int = None
    role_id: int = None
    required_mentions: int = 4
    start_from: int = 1
    available_slots: list[int] = []
    total_slots: int
    host_id: int

    open_time: datetime
    opened_at: datetime = None
    closed_at: datetime = None

    autoclean: list[str] = [_.value for _ in AutocleanType]
    autoclean_time: datetime = None

    autoslotlist: bool = True
    ping_role_id: int = None
    multiregister: bool = False
    stoggle: bool = True
    open_role_id: int = None
    autodelete_rejects: bool = False
    autodelete_extras: bool = True
    teamname_compulsion: bool = False

    time_elapsed: str = None
    show_time_elapsed: bool = True

    open_days: list[str] = [_.value for _ in Day]
    slotlist_format: dict = {}
    no_duplicate_name: bool = False

    open_message: dict = {}
    close_message: dict = {}
    banlog_channel_id: int = None

    match_time: int = None
    emojis: dict = {}

    required_lines: int = 0
    allow_duplicate_tags: bool = True
