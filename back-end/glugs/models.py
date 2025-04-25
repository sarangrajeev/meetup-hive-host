from django.db import models
from django.contrib.auth.models import User
#from members.models import Membership

GLUG_TYPE_CHOICES = (
    ('Institution', 'Institution'),
    ('Area', 'Area')
)

class Glug(models.Model):
    glug_name = models.CharField(max_length=100)
    description = models.CharField(max_length=256)
    organization = models.CharField(max_length=100)
    location = models.CharField(max_length=128,blank=True)
    glug_type = models.CharField(choices=GLUG_TYPE_CHOICES ,max_length=50)

    def __str__(self):
        return self.name
    # ecmembers = models.OneTo

class GlugMember(models.Model):
    member = models.ForeignKey(User, on_delete=models.CASCADE)
    glug = models.ForeignKey(Glug, on_delete=models.CASCADE)
