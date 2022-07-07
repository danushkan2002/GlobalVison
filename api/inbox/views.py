from django.shortcuts import render
from api.inbox.models import Inbox
from api.inbox.serializers import InboxSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Create your views here.

@api_view(['POST'])
def postInbox(request):
    data = request.data
    message = Inbox.objects.create(
        username = data['username'],
        email = data['email'],
        subject = data['subject'],
        content = data['content'],
    )
    serializer = InboxSerializer(message, many=False)
    return Response(serializer.data)

   
@api_view(['GET'])
def getInbox(request):
    application = Inbox.objects.all()
    serializer = InboxSerializer(application, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMessage(request, pk):
    application = Inbox.objects.get(id=pk)
    serializer = InboxSerializer(application, many=False)
    return Response(serializer.data)
