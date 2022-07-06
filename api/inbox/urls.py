from django.urls import path, include
from . import views


urlpatterns = [
    path('create/', views.postInbox, name='Post_Inbox'),
    path('', views.getInbox, name='Get_Inbox'),
    path('<str:pk>/', views.getMessage, name='Get_Message'),
]
