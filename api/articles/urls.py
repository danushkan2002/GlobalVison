from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.getArticles, name='Get_Articles'),
    path('categories/', views.getArticlesCategory, name='Get_Articles_Category'),
    path('create/', views.postArticles, name='Post_Articles'),
    path('<str:cat>/', views.getArticlesByCategory, name='Get_Articles_By_Category'),
    path('<str:cat>/<str:id>/', views.getArticle, name='Get_Article'),        
]
