from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from api import subjects
from  .models import Grade, Subject
from .serializers import GradeSerializer, SubjectSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

@api_view(['GET'])
def home(request):
    grade = Subject.objects.all()
    serializer = SubjectSerializer(grade, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def homepost(request):
    data = request.data
    subject = Subject.objects.create(
    subject_name = data['subject_name'],
    part_number = data['part_number'],
    grade_name = data['grade_name'],
    )
    serializer = SubjectSerializer(subject, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ageData(request,pk):
    subject = Subject.objects.filter(grade__age=pk)
    serializer = SubjectSerializer(subject, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ageWithSubjectData(request,pk,cat):
    subject = Subject.objects.filter(grade__age=pk, category__category=cat)
    serializer = SubjectSerializer(subject, many=True)
    return Response(serializer.data)

