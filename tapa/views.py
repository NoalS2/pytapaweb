from django.shortcuts import render, get_object_or_404
from .models import Tapa
from datetime import date

def tapa(request):
    return render(request, 'tapa/tapa.html')

def home(request):
    tapas = Tapa.objects
    return render(request, 'tapa/home.html', {'tapas': tapas})

def saved(request, tapa_id):
    tapa = get_object_or_404(Tapa, pk=tapa_id)
    return render(request, 'tapa/saved.html', {'tapa': tapa})

def daily(request):
    for tapa in Tapa.objects.all():
        if tapa.date == date.today():
            todaySolution = tapa.solution
    return render(request, 'tapa/daily.html', {'solution': todaySolution})
