from django.contrib import admin
from apps.post.models import Post, Like


class PostAdmin(admin.ModelAdmin):
    readonly_fields = ('date_posted',)
    list_display = ['title', 'content', 'date_posted']
    search_fields = ['title', 'content', 'date_posted']
    list_filter = ['date_posted']


admin.site.register(Post, PostAdmin)

admin.site.register(Like)