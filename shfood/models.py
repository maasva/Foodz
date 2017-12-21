from django.db import models
from django.utils import timezone

# Create your models here.
class FoodzUser(models.Model):
    name = models.ForeignKey('auth.user')
    age = models.CharField(max_length = 2)
    adress = models.CharField(max_length = 50)
    zipCode = models.CharField(max_length = 7)

class Invitation(models.Model):
    name = models.ForeignKey('auth.user')
    date_time = models.DateTimeField(default = timezone.now)
    cuisine = models.CharField(max_length = 20)
    costs = models.CharField(max_length = 6)
    maxPeople = models.CharField(max_length = 2)
    currentPeople = models.CharField(max_length = 2)
