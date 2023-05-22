from django.db import models

# Create your models here.

class Customer(models.Model):
    customer_id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    contact = models.CharField(max_length=12)

    def __str__(self):
        return self.first_name
