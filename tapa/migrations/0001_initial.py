# Generated by Django 3.0 on 2019-12-26 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tapa',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('url', models.URLField()),
                ('pub_date', models.DateTimeField()),
                ('image', models.ImageField(upload_to='images/')),
                ('solution', models.CharField(max_length=255)),
            ],
        ),
    ]
