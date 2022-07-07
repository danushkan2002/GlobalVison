# Generated by Django 4.0.5 on 2022-07-07 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0002_rename_birth_date_application_birth_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
        migrations.AlterField(
            model_name='application',
            name='phone_number',
            field=models.CharField(max_length=15, unique=True),
        ),
    ]