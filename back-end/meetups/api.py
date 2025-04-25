from ninja import NinjaAPI, Router
from django.shortcuts import get_object_or_404
from typing import List
from .models import Meetup
from .schemas import *

# Create API instance
router = Router(tags=["meetups"])

# Create Meetup
@router.post("/create/", response=CreateMeetupSchema)
def create_meetup(request, data: CreateMeetupSchema):
    meetup = Meetup.objects.create(**data.dict())
    return meetup

# Get All Meetups
@router.get("/list/", response=List[MeetupSchema])
def list_meetups(request):
    return Meetup.objects.all()

# Get a Single Meetup by ID
@router.get("/list/{meetup_id}", response=MeetupSchema)
def get_meetup(request, meetup_id: str):
    meetup = get_object_or_404(Meetup, id=meetup_id)
    return meetup

# Update Meetup
@router.put("/update/{meetup_id}", response=UpdateMeetupSchema)
def update_meetup(request, meetup_id: str, data: UpdateMeetupSchema):
    meetup = get_object_or_404(Meetup, id=meetup_id)
    for attr, value in data.dict().items():
        setattr(meetup, attr, value)
    meetup.save()
    return meetup


# Delete Meetup
@router.delete("/delete/{meetup_id}")
def delete_meetup(request, meetup_id: str):
    meetup = get_object_or_404(Meetup, id=meetup_id)
    meetup.delete()
    return {"success": True, "message": "Meetup deleted successfully"}
