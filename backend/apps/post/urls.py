from django.contrib import admin
from django.urls import path

from apps.post.views import ListCreatePostView, ListCreateLikeView, GetUpdateDeletePostView, GetUserPost

urlpatterns = [
    path('', ListCreatePostView.as_view(), name="list-create"),
    path('<int:pk>/', GetUpdateDeletePostView.as_view()),
    path('likes/', ListCreateLikeView.as_view()),
    path('me/', GetUserPost.as_view())
]