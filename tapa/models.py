from django.db import models

class Tapa(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateField(max_length=10)
    image = models.ImageField(upload_to='images/')
    solution = models.CharField(max_length=255)