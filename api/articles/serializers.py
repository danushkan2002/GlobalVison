from dataclasses import fields
from pyexpat import model
from api.articles.models import Article, ArticleCategory
from rest_framework import serializers

class ArticleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleCategory
        fields = "__all__"

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Article
        fields = "__all__"