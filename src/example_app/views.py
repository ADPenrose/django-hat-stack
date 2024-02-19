from django.shortcuts import render
from django.http import HttpResponse
import requests


# Create your views here.
def index(request):
    return render(request, "dashboardapp/index.html")


def get_quote(request):
    # Making a rquest to an API to get a quote
    response = requests.get("https://api.kanye.rest")
    quote = response.json()["quote"]
    return HttpResponse(quote)
