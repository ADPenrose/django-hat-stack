from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index, name="index"),
]

# This pattern will be used to handle the htmx requests.
htmx_patterns = [
    path("get-quote/", views.get_quote, name="get_quote"),
]

# We need to add the htmx_patterns to the urlpatterns
urlpatterns += htmx_patterns
