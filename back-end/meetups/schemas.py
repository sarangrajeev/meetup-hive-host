from ninja import Schema
from datetime import date, time
from typing import Optional, List
from uuid import UUID

#creating a meetup
class CreateMeetupSchema(Schema):
    topic: str
    description: str
    speaker: int
    socio_talk: int
    foss_talk: int   
    location: str
    phone_no: int
    meetup_date: date
    start_time: time
    end_time: time
    glug_id: int

#returning meetup 
class MeetupSchema(Schema):
    id: UUID
    topic: str
    description: str
    speaker: int
    socio_talk: int
    foss_talk: int
    location: str
    phone_no: str
    meetup_date: date
    start_time: time
    end_time: time
    duration: str
    glug_id: int

# partial updates for patch 
class UpdateMeetupSchema(Schema):
    topic: Optional[str] = None
    description: Optional[str] = None
    speaker: Optional[str] = None
    socio_talk: Optional[str] = None
    foss_talk: Optional[str] = None
    location: Optional[str] = None
    phone_no: Optional[str] = None
    meetup_date: Optional[date] = None
    start_time: Optional[time] = None
    end_time: Optional[time] = None
    glug_id: Optional[UUID] = None

