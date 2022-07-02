from api.subjects.models import Category, Grade, Subject
from rest_framework import serializers


class GradeSerializer(serializers.ModelSerializer):
   
    class Meta :
        model = Grade
        fields = ['age',]

class CategorySerializer(serializers.ModelSerializer):
   
    class Meta :
        model = Category
        fields = ['category',]

class SubjectSerializer(serializers.ModelSerializer):
    grade = GradeSerializer()
    category = CategorySerializer()
    class Meta :
        model = Subject
        fields = "__all__"


    