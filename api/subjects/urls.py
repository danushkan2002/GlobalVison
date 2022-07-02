from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.home, name='homeSubject'),
    path('post/', views.homepost, name='homeSubjectpost'),
    path('<str:pk>/', views.ageData, name="age-data"),
    path('<str:pk>/<str:cat>/', views.ageWithSubjectData, name="age-subject-data"),

    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
