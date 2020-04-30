from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Post(models.Model):
    title = models.CharField(
        max_length=200,
        null=True,
        blank=True
    )
    content = models.TextField()
    date_posted = models.DateTimeField(
        auto_now_add=True
    )
    id_user = models.ForeignKey(
        to=User,
        related_name="fk_post_to_user",
        on_delete=models.CASCADE
    )

    def like_count(self):
        pass

    class Meta:
        ordering = ['-date_posted']

    def __str__(self):
        return f'#{self.id} | {self.title}'


class Like(models.Model):
    id_post = models.ForeignKey(
        to=Post,
        related_name="fk_like_to_post",
        null=True,
        on_delete=models.CASCADE
    )

    id_user = models.ForeignKey(
        to=User,
        related_name="fk_like_to_user",
        on_delete=models.CASCADE
    )

    # Need to improve with id_comment