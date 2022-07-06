from api.applications.models import Application
from rest_framework import serializers
from datetime import date

class ApplicationSerializer(serializers.ModelSerializer):
    age_category = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Application
        fields = ['id','student_name', 'email', 'phone_number', 'birth_year' ,'distric', 'postal_code','age_category']

    def get_age_category(self, obj):
        today = date.today()
        age = today.year - obj.birth_year
        if age > 18 :
            age_category = 20
        else:
            age_category = age
        return age_category