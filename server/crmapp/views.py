from django.shortcuts import render
from rest_framework import viewsets
from crmapp.models import Customer
from crmapp.serializers import CustomerSerializer
# Create your views here.


class CustomerViewSet(viewsets.ModelViewSet):
    '''the modelviewset has all the crud operations'''
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
