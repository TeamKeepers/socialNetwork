from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from apps.user.models import User
from apps.user.serializers import UserSerializer


class ListCreateUserView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GetUpdateDeleteUserView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

