from django.urls import path
from institutions.api import api

urlpatterns = [
    path('', api.urls),  # Include the API routes
]
