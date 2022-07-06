from api.inbox.models import Inbox
from rest_framework import serializers

class InboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inbox
        fields = ['id','username', 'email', 'subject', 'content']
