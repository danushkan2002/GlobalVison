from pyexpat import model
from django.db import models
from django.urls import reverse

# Create your models here.

class Grade(models.Model):
    grade = models.TextField(max_length=50, unique=True)
    age = models.IntegerField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.grade

class Category(models.Model):
    category = models.TextField(max_length=50, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name    =   'category'
        verbose_name_plural =   'categories'

    def __str__(self):
        return self.category


class Subject(models.Model):
    grade = models.ForeignKey(Grade, on_delete=models.CASCADE, related_name='Grades')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='Categories')
    subject_name = models.CharField(max_length=100, unique=True)
    part_number = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    pdf = models.FileField(upload_to='pdf/', null=True, blank=True)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    tile = models.CharField(max_length=100, null=True, blank=True)
    urls = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.subject_name




