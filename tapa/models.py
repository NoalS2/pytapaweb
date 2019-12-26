from django.db import models

class Tapa(models.Model):
    title = models.CharField(max_length=255)
    url = models.URLField()
    pub_date = models.DateTimeField()
    image = models.ImageField(upload_to='images/')
    solution = models.CharField(max_length=255)