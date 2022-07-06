from django.contrib import admin

from api.articles.models import Article, ArticleCategory

# Register your models here.

admin.site.register(Article)
admin.site.register(ArticleCategory)