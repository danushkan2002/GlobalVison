from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('auth/', include('api.accounts.urls')),
    path('subjects/', include('api.subjects.urls')),
    path('projects/', include('api.about.urls')),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
