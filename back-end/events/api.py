from ninja import Router
from .models import Event, Sponsor
from .schemas import *
from typing import List

router = Router(tags=["events"])


from datetime import date

@router.get("/list", response=List[EventSchema])
def list_events(request):
    events = Event.objects.prefetch_related("sponsors").all()
    # Convert date to string format
    return [
        {
            **event.__dict__,
            'date': event.date.isoformat(),  # Convert date to string
            'sponsors': [sponsor for sponsor in event.sponsors.all()]
        }
        for event in events
    ]

@router.get("/list/{event_id}", response=EventSchema)
def get_event(request, event_id: int):
    event = Event.objects.prefetch_related("sponsors").get(id=event_id)
    # Convert date to string format
    return {
        **event.__dict__,
        'date': event.date.isoformat(),  # Convert date to string
        'sponsors': [sponsor for sponsor in event.sponsors.all()]
    }


@router.post("/create", response=EventSchema)       
def create_event(request, data: EventCreateSchema):
    event = Event.objects.create(
        title=data.title,
        category=data.category,
        description=data.description,
        date=data.date,
        start_time=data.start_time,
        end_time=data.end_time,
        location=data.location,
        organizer=data.organizer,
        must_attend=data.must_attend,
        map_url=data.map_url,
    )
    if data.sponsor_ids:
        event.sponsors.set(Sponsor.objects.filter(id__in=data.sponsor_ids))
    return event


@router.get("/list-sponsor", response=List[SponsorSchema])
def list_sponsors(request):
    return Sponsor.objects.all()


@router.post("/create-sponsor", response=SponsorSchema)
def create_sponsor(request, data: SponsorCreateSchema):
    sponsor = Sponsor.objects.create(**data.dict())
    return sponsor

@router.put("/update/{event_id}", response=EventSchema)
def update_event(request, event_id: int, data: EventCreateSchema):
    event = Event.objects.get(id=event_id)
    for attr, value in data.dict(exclude_unset=True).items():
        if attr == "sponsor_ids":
            sponsors = Sponsor.objects.filter(id__in=value)
            event.sponsors.set(sponsors)
        else:
            setattr(event, attr, value)
    event.save()
    return event


@router.delete("/delete/{event_id}")
def delete_event(request, event_id: int):
    event = Event.objects.get(id=event_id)
    event.delete()
    return {"success": True}


@router.put("/update-sponsor/{sponsor_id}", response=SponsorSchema)
def update_sponsor(request, sponsor_id: int, data: SponsorCreateSchema):
    sponsor = Sponsor.objects.get(id=sponsor_id)
    for attr, value in data.dict().items():
        setattr(sponsor, attr, value)
    sponsor.save()
    return sponsor


@router.delete("/delete-sponsor/{sponsor_id}")
def delete_sponsor(request, sponsor_id: int):
    sponsor = Sponsor.objects.get(id=sponsor_id)
    sponsor.delete()
    return {"success": True}
