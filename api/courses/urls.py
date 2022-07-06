from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.getCourses, name='Get_Courses'),
    path('create/', views.postCourse, name='Create_Course'),
    path('<str:pk>/', views.getCourse, name='Get_Course'),    
]
