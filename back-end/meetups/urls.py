from django.urls import path
from meetups.api import api

urlpatterns = [
    path('', api.urls),  # Include the API routes
]