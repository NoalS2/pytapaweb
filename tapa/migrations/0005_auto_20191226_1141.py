# Generated by Django 3.0 on 2019-12-26 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tapa', '0004_auto_20191226_1136'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tapa',
            name='date',
            field=models.TextField(max_length=10),
        ),
    ]
