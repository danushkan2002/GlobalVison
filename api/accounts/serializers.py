from rest_framework import serializers
from .models import UserAccount
from datetime import date
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    age = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = UserAccount
        fields = ['id', 'username', 'birth_year', 'age']

    def get_age(self, obj):
        today = date.today()
        age = today.year - obj.birth_year
        return age

class UserSerializerWithToken(serializers.ModelSerializer):
    age = serializers.SerializerMethodField(read_only=True)
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = UserAccount
        fields = ['id', 'username','birth_year', 'age', 'token']

    def get_age(self, obj):
        today = date.today()
        age = today.year - obj.birth_year
        return age
        
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)