from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    # log with emails instead of username
    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = ["username"]

    email = models.EmailField(unique=True)
    password = models.CharField(
        max_length=270,
        null=True
    )
    username = models.CharField(
        max_length=150,
        null=True
    )
    avatar = models.URLField(
        default="https://superheroes.propulsion-learn.ch/assets/img/users/spiderman-avatar.png"
    )

    # rewrite the name of OBJ
    def __str__(self):
        return self.username


class RegistrationToken(models.Model):
    token = models.CharField(
        max_length=270,
        unique=True
    )

    id_user = models.ForeignKey(
        to=User,
        related_name="fk_registration_token_to_user",
        on_delete=models.CASCADE
    )