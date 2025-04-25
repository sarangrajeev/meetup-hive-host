from django.db import models
from django.contrib.auth.models import User

# Create your models here.

from glugs.models import Glug

INSTITUTION_TYPE_CHOICES = (
    ('school','school'),
    ('college','college')
    )

class Institution(models.Model):
    name = models.CharField(max_length=250)
    location = models.CharField(max_length=128,blank=True)
    institution_type=models.CharField(choices=INSTITUTION_TYPE_CHOICES ,max_length=100)
    glug = models.ForeignKey(Glug,on_delete=models.CASCADE, related_name='ins_glug_name')

class Staff(models.Model):
    name = models.CharField(max_length=250)
    position = models.CharField(max_length=100)
    dept = models.CharField(max_length=100)
    contact=models.CharField(max_length=10)
    gmail=models.CharField(max_length=250)
    institution=models.ForeignKey(Institution,on_delete=models.CASCADE, related_name='ins_name')
