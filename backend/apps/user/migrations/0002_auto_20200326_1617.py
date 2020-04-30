# Generated by Django 3.0.4 on 2020-03-26 15:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.URLField(default='https://superheroes.propulsion-learn.ch/assets/img/users/spiderman-avatar.png'),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=270, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.CreateModel(
            name='RegistrationToken',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=270, unique=True)),
                ('id_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fk_registration_token_to_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
