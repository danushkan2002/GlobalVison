from django.urls import path, include
from . import views


urlpatterns = [
    path('create/', views.postCourse, name='Create_Application'),
    path('', views.getProjects, name='Get_Applications'),
    path('<str:pk>/', views.getProject, name='Get_Application'),
]