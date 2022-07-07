from django.urls import path, include
from . import views


urlpatterns = [
    path('users/', views.getUsers, name='get-users'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('create/', views.registerUser, name='register-user'),
    path('update/', views.updateUserProfile, name='update-user'),

    path('get/school/', views.getSchool, name='get-school'),

    path('users/<str:pk>/', views.getUser, name='get-user'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
