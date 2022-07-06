from dataclasses import fields
from pyexpat import model
from api.results.models import Result
from rest_framework import serializers


class ResultSerializer(serializers.ModelSerializer):
    total = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Result
        fields = ['id', 'student_id', 'course_id', 'vocabulary', 'grammar' ,'speaking_and_listening', 'writing', 'reading', 'total']

    def get_total(self, obj):
        total = obj.vocabulary + obj.grammar + obj.speaking_and_listening + obj.writing + obj.reading
        return total

