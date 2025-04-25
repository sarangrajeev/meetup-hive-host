from django.urls import path
from events.api import api

urlpatterns = [
    path('', api.urls),  # Include the API routes
]
