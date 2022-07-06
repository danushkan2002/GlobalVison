from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('auth/', include('api.accounts.urls')),
    path('subjects/', include('api.subjects.urls')),
    path('projects/', include('api.about.urls')),
    path('articles/', include('api.articles.urls')),
    path('applications/', include('api.applications.urls')),
    path('results/', include('api.results.urls')),
    path('courses/', include('api.courses.urls')),
    path('inbox/', include('api.inbox.urls')),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
