from django.db import models
import uuid
from datetime import timedelta
from django.contrib.auth.models import User 
from glugs.models import Glug


class Meetup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    topic = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    speaker = models.ForeignKey(User, on_delete=models.CASCADE,related_name='meetup_speaker')
    social_talk = models.ForeignKey(User, on_delete=models.CASCADE, related_name='meetup_speaker_social')
    foss_talk = models.ForeignKey(User,on_delete=models.CASCADE, related_name='meetup_speaker_foss')
    location = models.CharField(max_length=185)
    phone_no = models.CharField(max_length=10)
    meetup_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    duration = models.DurationField()
    glug = models.ForeignKey(Glug, on_delete=models.CASCADE, related_name='meetups')
    def save(self, *args, **kwargs):
        # Calculate duration before saving
        self.duration = end_time - start_time
        super().save(*args, **kwargs)
