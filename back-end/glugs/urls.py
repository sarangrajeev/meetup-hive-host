from django.urls import path
from .api import api

urlpatterns = [
    path('', api.urls),  # Include the API routes
]