from django.shortcuts import render
from api.articles.models import Article, ArticleCategory
from api.articles.serializers import ArticleCategorySerializer, ArticleSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Create your views here.


@api_view(['POST'])
def postArticles(request):
    data = request.data
    article = Article.objects.create(
        creator_name = data['creator_name'],
        category = data['category'],
    )
    serializer = ArticleSerializer(article, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getArticlesCategory(request):
    categories = ArticleCategory.objects.all()
    serializer = ArticleCategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getArticles(request):
    article = Article.objects.all()
    serializer = ArticleSerializer(article, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getArticlesByCategory(request, cat):
    article = Article.objects.filter(category=cat)
    serializer = ArticleSerializer(article, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getArticle(request, cat, id):
    article = Article.objects.get(category=cat, id=id)
    serializer = ArticleSerializer(article, many=False) 
    return Response(serializer.data)
