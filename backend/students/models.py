from django.db import models

class Student(models.Model):
  sid = models.BigIntegerField(null='N/A')
  name = models.CharField(max_length=255,null='N/A')
  sex = models.CharField(max_length=255,null='N/A')
  contact = models.CharField(max_length=255,null='N/A')
  address = models.CharField(max_length=255,null='N/A')
  dept = models.CharField(max_length=255,null='N/A')
  course = models.CharField(max_length=255,null='N/A')
  year = models.BigIntegerField(null='N/A')
  section = models.CharField(max_length=255,null='N/A')