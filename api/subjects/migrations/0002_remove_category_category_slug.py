# Generated by Django 4.0.5 on 2022-07-01 15:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('subjects', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='category_slug',
        ),
    ]
