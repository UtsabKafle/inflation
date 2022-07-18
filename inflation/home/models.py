from django.db import models

# Create your models here.
class principal(models.Model):
    amount = models.CharField(max_length=120)

class expenses(models.Model):
    reason = models.TextField()
