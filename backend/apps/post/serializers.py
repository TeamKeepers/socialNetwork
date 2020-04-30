from rest_framework import serializers
from apps.post.models import Post, Like
from apps.user.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    id_user = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = "__all__"


class LikeSerializer(serializers.ModelSerializer):
    id_user = UserSerializer(read_only=True)

    class Meta:
        model = Like
        fields = "__all__"