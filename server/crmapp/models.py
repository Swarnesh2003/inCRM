from django.db import models

# Create your models here.

class Customer(models.Model):
    customer_id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50,unique=True)
    contact = models.CharField(max_length=10,unique=True)

    def __str__(self):
        return self.first_name

class CustomerDetails(models.Model):
    customer_id=models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name= models.CharField(max_length=50)
    contact = models.CharField(max_length=10, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    address1 = models.CharField(max_length=50)
    address2 = models.CharField(max_length=50)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=10)
    purchase_date = models.DateField()
    model = models.CharField(max_length = 30)
    sr_number = models.CharField(max_length= 50)

    def __str__(self):
        return self.customer_id
