from rest_framework import serializers
from crmapp.models import Customer
from crmapp.models import CustomerDetails 

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ['customer_id', 'first_name', 'last_name', 'email', 'contact' ]

class CustomerDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomerDetails
        fields = ['customer_id', 'first_name', 'last_name', 'contact', 'email', 'address1', 'address2', 'city', 'state', 'pincode', 'purchase_date', 'model', 'sr_number']