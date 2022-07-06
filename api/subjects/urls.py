from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.home, name='homeSubject'),
    path('post/', views.homepost, name='homeSubjectpost'),
    path('get/category/', views.getSubjectCategory, name='get-subject-category'),
    path('<str:age>/', views.getSubjectsByAge, name="Get_Subjects_By_Age"),
    path('<str:age>/<str:cat>/', views.getSubjectsByAgeAndCategory, name="Get_Subjects_By_Age_And_Category"),
    path('<str:age>/<str:cat>/<str:id>', views.getSubjectByAgeAndCategory, name="Get_Subject_By_Age_And_Category"),
    
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
