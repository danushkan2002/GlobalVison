from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.getProjects, name='Get-Projects'),

    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]