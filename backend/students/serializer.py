from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ["sid", "name", "sex", "contact", "address", "dept", "course", "year", "section" ]