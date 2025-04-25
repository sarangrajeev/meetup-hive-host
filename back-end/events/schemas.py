from ninja import Schema
from typing import List, Optional


class SponsorSchema(Schema):
    id: int
    name: str
    level: str
    logo_url: str
    website: str


class SponsorCreateSchema(Schema):
    name: str
    level: str
    logo_url: str
    website: str


class EventSchema(Schema):
    id: int
    title: str
    category: str
    description: str
    date: str
    start_time: str
    end_time: str
    location: str
    organizer: str
    must_attend: bool
    map_url: Optional[str]
    sponsors: List[SponsorSchema] = []


class EventCreateSchema(Schema):
    title: str
    category: str
    description: str
    date: str
    start_time: str
    end_time: str
    location: str
    organizer: str
    must_attend: Optional[bool] = False
    map_url: Optional[str] = None
    sponsor_ids: Optional[List[int]] = []
