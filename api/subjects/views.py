from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from api import subjects
from  .models import Category, Grade, Subject
from .serializers import CategorySerializer, GradeSerializer, SubjectSerializer
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
def getSubjectsByAge(request,age):
    subject = Subject.objects.filter(grade__age=age)
    serializer = SubjectSerializer(subject, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSubjectsByAgeAndCategory(request,age,cat):
    subject = Subject.objects.filter(grade__age=age, category__category=cat)
    serializer = SubjectSerializer(subject, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSubjectByAgeAndCategory(request,age,cat,id):
    subject = Subject.objects.get(grade__age=age, category__category=cat, id=id)
    serializer = SubjectSerializer(subject, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSubjectCategory(request):
    subject = Category.objects.all()
    serializer = CategorySerializer(subject, many=True)
    return Response(serializer.data)



