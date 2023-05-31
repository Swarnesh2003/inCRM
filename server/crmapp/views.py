from django.shortcuts import render
from rest_framework import viewsets
from crmapp.models import Customer
from crmapp.serializers import CustomerSerializer
from crmapp.models import CustomerDetails
from crmapp.serializers import CustomerDetailSerializer
# Create your views here.


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerDetailsViewSet(viewsets.ModelViewSet):
    queryset = CustomerDetails.objects.all()
    serializer_class = CustomerDetailSerializer