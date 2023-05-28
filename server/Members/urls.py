from django.urls import path 
from . import views

urlpatters = [
    path('register'),
    path('login'),
    path('logout'),
    path('user')
]