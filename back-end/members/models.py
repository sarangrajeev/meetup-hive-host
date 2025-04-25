from django.db import models
from django.contrib.auth.models import User 
import uuid

BLOOD_GROUP_CHOICES = (
    ("A+", "A+"),
    ("A-", "A-"),
    ("B+", "B+"),
    ("B-", "B-"),
    ("AB+", "AB+"),
    ("AB-", "AB-"),
    ("O+", "O+"),
    ("O-", "O-"),
    ("special", "Specialty Group"))

GENDER_CHOICES = (
    ("Man","Man"),
    ("Woman", "Woman"),
    ("Transperson", "Transperson")
)

OCCUPATION_CHOICES = (
    ("Student", "Student"),
    ("Professional", "Professional"),
    ("Entrepreneur","Entrepreneur"),
    ("Job seeker", "Job seeker")
)

class Membership(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    blood_group = models.CharField(choices=BLOOD_GROUP_CHOICES,max_length=20,blank=True)
    gender = models.CharField(choices=GENDER_CHOICES, max_length=20)
    phone_no = models.CharField(max_length=10)
    city = models.CharField(max_length=100,blank=True)
    address = models.CharField(max_length=100,blank=True)
    pincode = models.CharField(max_length=6,blank=True)
    institution = models.CharField(max_length=100,blank=True)
    dob = models.DateField(blank=True)
    glug = models.CharField(max_length=100,blank=True)
    occupation = models.CharField(choices=OCCUPATION_CHOICES, max_length=50)
    occupation_details = models.CharField(max_length=100,blank=True)