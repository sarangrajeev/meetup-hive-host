from django.db import models
import uuid
from members.models import Membership  
from meetups.models import Meetup


class MeetupAttendance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    meetup = models.ForeignKey(Meetup, on_delete=models.CASCADE, related_name="attendees")
    member = models.ForeignKey(Membership, on_delete=models.CASCADE, related_name="attendance_records")
    timestamp = models.DateTimeField(auto_now_add=True) 

# class ECAttendance(models.Model):
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     meeting = models.ForeignKey(ECMeeting, on_delete=models.CASCADE, related_name="attendees")
#     member = models.ForeignKey(Membership, on_delete=models.CASCADE, related_name="ec_attendance_records")
#     timestamp = models.DateTimeField(auto_now_add=True)

