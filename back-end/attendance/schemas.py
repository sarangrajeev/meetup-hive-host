# attendance/schemas.py
from ninja import Schema
from datetime import datetime
import uuid

class CreateUpdateMeetupAttendanceSchema(Schema):
    meetup_id: uuid.UUID
    member_id: uuid.UUID

class MeetupAttendanceSchema(Schema):
    id: uuid.UUID
    meetup_id: uuid.UUID
    member_id: uuid.UUID
    timestamp: datetime
