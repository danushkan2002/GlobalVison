from distutils.command.upload import upload
from pyexpat import model
from unicodedata import category
from django.db import models

# Create your models here.

class ArticleCategory(models.Model):
    category_name = models.CharField(max_length=100, unique=True)
    
    def __str__(self):
        return self.category_name

class Article(models.Model):
    creator_name = models.CharField(max_length=100, null=True, blank=True)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/articles/')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.creator_name
