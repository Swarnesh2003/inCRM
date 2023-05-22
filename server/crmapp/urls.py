from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from crmapp.views import CustomerViewSet


router = routers.DefaultRouter()
router.register(r'customer', CustomerViewSet) 


urlpatterns = [
    path('', include(router.urls)),

]
