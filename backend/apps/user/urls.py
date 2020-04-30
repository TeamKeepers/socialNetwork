from django.contrib import admin
from django.urls import path

from apps.user.views import ListCreateUserView

urlpatterns = [
    path('', ListCreateUserView.as_view()),
]