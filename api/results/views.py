import re
from django.shortcuts import render
from api.results.models import Result
from api.results.serializers import ResultSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
# Create your views here.

@api_view(['POST'])
def postResult(request):
    data = request.data(
        student_id = data['student_id'],
        course_id = data['course_id'],
        vocabulary = data['vocabulary'],
        grammar = data['grammar'],
        speaking_and_listening = data['speaking_and_listening'],
        writing = data['writing'],
        reading = data['reading']
    )
    serializer = ResultSerializer(data, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getResults(request):
    results = Result.objects.all()
    serializer = ResultSerializer(results, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getResult(request, pk):
    results = Result.objects.get(id=pk)
    serializer = ResultSerializer(results, many=False)
    return Response(serializer.data)

