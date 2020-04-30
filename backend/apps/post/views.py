from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView

from apps.post.models import Post, Like
from apps.post.serializers import PostSerializer, LikeSerializer
from rest_framework.response import Response


class ListCreatePostView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(id_user=self.request.user)

# SANS LISTCREATEAPIVIEW
# class GetCreatePostsView(GenericAPIView):
#     queryset = Post.objects.all().order_by('created')
#     #queryset = Post.objects.all().order_by('created').reverse()
#     serializer_class = PostSerializer
#     def get(self, request, *args, **kwargs):
#         posts = self.get_queryset()
#         serializer = self.get_serializer(posts, many=True)
#         return Response(serializer.data)
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)


class GetUpdateDeletePostView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class ListCreateLikeView(ListCreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

    def perform_create(self, serializer):
        serializer.save(id_user=self.request.user)


class GetUserPost(GenericAPIView):

    def get(self, request, *args, **kwargs):
        posts = Post.objects.filter(id_user=request.user)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)