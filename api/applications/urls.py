from django.urls import path, include
from . import views


urlpatterns = [
    path('create/', views.postApplication, name='Create_Application'),
    path('', views.getApplications, name='Get_Applications'),
    path('<str:pk>/', views.getApplication, name='Get_Application'),
]
