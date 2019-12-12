from django.shortcuts import render

def tapa(request):
    return render(request, 'tapa/tapa.html')

def home(request):
    return render(request, 'tapa/home.html')
