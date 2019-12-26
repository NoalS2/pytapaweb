from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.tapa, name='tapa'),
    path('daily/', views.daily, name='daily'),
    path('<int:tapa_id>/', views.saved, name='saved'),
]