from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    mobile = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name