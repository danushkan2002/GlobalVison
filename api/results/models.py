from lib2to3.pgen2 import grammar
from statistics import mode
from django.db import models

# Create your models here.
class Result(models.Model):
    student_id = models.CharField(max_length=100)
    course_id = models.CharField(max_length=100)
    vocabulary = models.IntegerField()
    grammar = models.IntegerField()
    speaking_and_listening = models.IntegerField()
    writing = models.IntegerField()
    reading = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.student_id