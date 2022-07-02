from distutils.command.upload import upload
from pyexpat import model
from django.db import models

# Create your models here.

class Projects(models.Model):
    images = models.ImageField(upload_to='images/projects')
    content = models.CharField(max_length=255, null=True, blank=True)
    place_name = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.place_name