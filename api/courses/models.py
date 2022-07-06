from django.db import models

# Create your models here.
class Course(models.Model):
    course_name = models.CharField(max_length=150)
    course_duration_in_month_count = models.IntegerField()
    course_id = models.IntegerField()
    starting_month = models.IntegerField()
    starting_date = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.course_name