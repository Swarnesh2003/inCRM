from django.contrib import admin
from crmapp.models import Customer
from crmapp.models import CustomerDetails
# Register your models here.

admin.site.register(Customer)
admin.site.register(CustomerDetails)
