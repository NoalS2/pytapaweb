# Generated by Django 3.0 on 2019-12-26 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tapa', '0003_auto_20191226_1100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tapa',
            name='date',
            field=models.CharField(max_length=10),
        ),
    ]
