from django.shortcuts import render
from api.applications.models import Application
from api.applications.serializers import ApplicationSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Create your views here.

@api_view(['POST'])
def postApplication(request):
    data = request.data
    application = Application.objects.create(
        student_name = data['student_name'],
        email = data['email'],
        phone_number = data['phone_number'],
        birth_year = data['birth_year'],
        distric = data['distric'],
        postal_code = data['postal_code'],
    )
    serializer = ApplicationSerializer(application, many=False)
    return Response(serializer.data)

   
@api_view(['GET'])
@permission_classes([IsAdminUser])
def getApplications(request):
    application = Application.objects.all()
    serializer = ApplicationSerializer(application, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getApplication(request, pk):
    application = Application.objects.get(id=pk)
    serializer = ApplicationSerializer(application, many=False)
    return Response(serializer.data)
