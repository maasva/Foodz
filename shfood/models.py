from django.db import models
from django.utils import timezone

# Create your models here.
class FoodzUser(models.Model):
    name = models.ForeignKey('auth.user')
    age = models.CharField(max_length = 2)
    adress = models.CharField(max_length = 50)
    zipCode = models.CharField(max_length = 7)
