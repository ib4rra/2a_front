from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=100, default="")
    middle_name = models.CharField(max_length=100, default="")
    last_name = models.CharField(max_length=100, default="")
    contact_no = models.CharField(max_length=100, default="")
    email = models.CharField(max_length=100, default="")
    address = models.CharField(max_length=100, default="")
    birthday = models.CharField(max_length=100, default="")
    place_of_birth = models.CharField(max_length=100, default="")
    gender = models.CharField(max_length=100, default="")
    civil_status = models.CharField(max_length=100, default="")
    height = models.CharField(max_length=100, default="")
    weight = models.CharField(max_length=100, default="")
    blood_type = models.CharField(max_length=100, default="")
    GSIS_ID_no = models.CharField(max_length=100, default="")
    PAGIBIG_ID_no = models.CharField(max_length=100, default="")
    PHILHEALTH_no = models.CharField(max_length=100, default="")
    SSS_no = models.CharField(max_length=100, default="")
    TIN_no = models.CharField(max_length=100, default="")
    agency_employee_no = models.CharField(max_length=100, default="")
    citizenship = models.CharField(max_length=100, default="")
    permanent_address = models.CharField(max_length=100, default="")
    ZIP_code = models.CharField(max_length=100, default="")
    telephone_no = models.CharField(max_length=100, default="")
    Fathers_name = models.CharField(max_length=100, default="")
    Mothers_name = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.name