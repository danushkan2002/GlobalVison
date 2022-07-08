from django.shortcuts import render
from api.courses.models import Course
from api.courses.serializers import CourseSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Create your views here.

@api_view(['POST'])
@permission_classes([IsAdminUser])
def postCourse(request):
    data = request.data
    course = Course.objects.create(
        course_name = data['course_name'],
        course_duration_in_month_count = data['course_duration_in_month_count'],
        course_id = data['course_id'],
        starting_month = data['starting_month'],
        starting_date = data['starting_date'],
        
    )
    serializer = CourseSerializer(course, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getCourses(request):
    results = Course.objects.all()
    serializer = CourseSerializer(results, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCourse(request, pk):
    results = Course.objects.get(id=pk)
    serializer = CourseSerializer(results, many=False)
    return Response(serializer.data)

