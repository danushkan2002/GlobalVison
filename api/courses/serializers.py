from api.courses.models import Course
from rest_framework import serializers


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'course_name', 'course_duration_in_month_count', 'course_id', 'starting_month' ,'starting_date']
