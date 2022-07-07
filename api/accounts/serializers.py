from dataclasses import fields
from rest_framework import serializers
from .models import School, UserAccount
from datetime import date
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    age_category = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = UserAccount
        fields = ['id', 'username', 'birth_year', 'student_id', 'school_name' ,'phone_number', 'age_category', 'is_admin']

    def get_age_category(self, obj):
        if obj.birth_year :
            today = date.today()
            age = today.year - obj.birth_year
            if age > 18 :
                age_category = 20
            else:
                age_category = age
            return age_category
        else:
            pass
        

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'

class UserSerializerWithToken(serializers.ModelSerializer):
    age_category = serializers.SerializerMethodField(read_only=True)
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = UserAccount
        fields = ['id', 'username','birth_year', 'student_id', 'school_name' ,'phone_number', 'age_category', 'token', 'is_admin', 'is_superadmin']

    def get_age_category(self, obj):
        if obj.birth_year :
            today = date.today()
            age = today.year - obj.birth_year
            if age > 18 :
                age_category = 20
            else:
                age_category = age
            return age_category
        else:
            pass

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
