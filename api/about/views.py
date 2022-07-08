from django.shortcuts import render
from api.about.models import Projects
from api.about.serializer import ProjectSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Create your views here.@

@api_view(['POST'])
@permission_classes([IsAdminUser])
def postCourse(request):
    data = request.data
    course = Projects.objects.create(
        content = data['content'],
        place_name = data['place_name'],        
    )
    serializer = ProjectSerializer(course, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getProjects(request):
    results = Projects.objects.all()
    serializer = ProjectSerializer(results, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProject(request, pk):
    results = Projects.objects.get(id=pk)
    serializer = ProjectSerializer(results, many=False)
    return Response(serializer.data)

