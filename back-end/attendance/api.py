from ninja import Router
from django.shortcuts import get_object_or_404
from .models import MeetupAttendance
from .schemas import *
import uuid

router = Router(tags=["attendances"])

# create 
@router.post("/create", response=MeetupAttendanceSchema)
def create_attendance(request, data: CreateUpdateMeetupAttendanceSchema):
    return MeetupAttendance.objects.create(**data.dict())

# read all 
@router.get("/list", response=list[MeetupAttendanceSchema])
def list_attendances(request):
    return MeetupAttendance.objects.all()

# read one
@router.get("/list/{id}", response=MeetupAttendanceSchema)
def get_attendance(request, id: uuid.UUID):
    return get_object_or_404(MeetupAttendance, id=id)

# update 
@router.put("/edit/{id}", response=MeetupAttendanceSchema)
def update_attendance(request, id: uuid.UUID, data: CreateUpdateMeetupAttendanceSchema):
    attendance = get_object_or_404(MeetupAttendance, id=id)
    for attr, value in data.dict().items():
        setattr(attendance, attr, value)  # Updates meetup_id/member_id
    attendance.save()
    return attendance

#delete
@router.delete("/delete/{id}", response={204: None})
def delete_attendance(request, id: uuid.UUID):
    attendance = get_object_or_404(MeetupAttendance, id=id)
    attendance.delete()
    return 204, None
