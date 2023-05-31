from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from crmapp.views import CustomerViewSet
from crmapp.views import CustomerDetailsViewSet

router = routers.DefaultRouter()
router.register(r'customer', CustomerViewSet) 

router.register(r'customerDetail', CustomerDetailsViewSet)


urlpatterns = [
    path('', include(router.urls)),
]

