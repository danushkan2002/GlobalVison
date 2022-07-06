from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.getResults, name='Get_Results'),
    path('post/', views.postResult, name='Post_Result'),
    path('<str:pk>/', views.getResult, name='Get_Result'),

]
