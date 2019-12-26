from django.shortcuts import render, get_object_or_404
from .models import Tapa

def tapa(request):
    return render(request, 'tapa/tapa.html')

def home(request):
    return render(request, 'tapa/home.html')

def daily(request, tapa_id):
    tapa = get_object_or_404(Tapa, pk=tapa_id)
    return render(request, 'tapa/daily.html', {'tapa': tapa})
