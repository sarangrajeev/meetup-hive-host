from django.db import models

class Sponsor(models.Model):
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=50)
    logo_url = models.URLField()
    website = models.URLField()

    def __str__(self):
        return self.name

class Event(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    start_time = models.CharField(max_length=20)
    end_time = models.CharField(max_length=20)
    location = models.CharField(max_length=200)
    organizer = models.CharField(max_length=200)
    must_attend = models.BooleanField(default=False)
    map_url = models.URLField(blank=True, null=True)

    sponsors = models.ManyToManyField(Sponsor, related_name="events", blank=True)

    def __str__(self):
        return self.title


class Tag(models.Model):
    name = models.CharField(max_length=100)
    event = models.ForeignKey(Event, related_name='tags', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

