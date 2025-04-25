from django.contrib import admin
from django.urls import path, include
from ninja import NinjaAPI
from glugs.api import router as glug_router
from attendance.api import router as attendance_router
from meetups.api import router as meetup_router
from institutions.api import router as institution_router
from events.api import router as events_router
from members.api import router as members_router

api = NinjaAPI()
api.add_router("/glugs/",glug_router)
api.add_router("/attendance/",attendance_router)
api.add_router("/events", events_router)
api.add_router("/meetups/",meetup_router)
api.add_router("/institutions/",institution_router)
api.add_router("/members/",members_router)
        
@api.get("/")
def home(request):
    return {"message": "hello fediverse"}

@api.get("/add")
def add(request, a: int, b: int):
    return {"result": a + b}


@api.get("/subtract")
def subtract(request, a: int, b: int):
    return {"result": a - b}

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
]


