from django.contrib import admin
from .models import UserAccount, School, District
# Register your models here.

admin.site.register(UserAccount)
admin.site.register(District)
admin.site.register(School)