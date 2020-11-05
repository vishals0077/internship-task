from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    price = models.IntegerField(blank=False, default='')
    