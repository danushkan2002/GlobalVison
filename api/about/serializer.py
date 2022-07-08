from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Projects


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['id','content', 'place_name']
