from email import message
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import UserAccount, School
from .serializers import UserSerializer, UserSerializerWithToken, SchoolSerializer
from api.accounts import serializers
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status

# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUsers(request):
    users = UserAccount.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUser(request, pk):
    user = UserAccount.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getSchool(request):
    school = School.objects.all()
    serializer = SchoolSerializer(school, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    user = UserAccount.objects.create(
    username = data['username'],
    birth_year = data['birth_year'],
    student_id = data['student_id'],
    school_name = data['school_name'],
    phone_number = data['phone_number'],
    password = make_password(data['password']),
    
    )
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)
   
@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.username = data['username']
    user.birth_year = data['birth_year']

    user.password = data['password']
    user.save()
    return Response(serializer.data)
    