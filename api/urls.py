from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('auth/', include('api.accounts.urls')),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
