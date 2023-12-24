from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from . models import *
from . serializer import *
from rest_framework.response import Response

class StudentView(APIView):
  def get(self, request, sid=None):
    if sid is not None:
      try:
        student = Student.objects.get(sid=sid)
        return Response([{"sid": student.sid,
                          "name": student.name,
                          "sex": student.sex,
                          "contact": student.contact,
                          "address": student.address,
                          "dept": student.dept,
                          "course": student.course,
                          "year": student.year,
                          "section": student.section}])
      except Student.DoesNotExist:
        return Response(status=404)
    else:
      students = [{"sid": student.sid,
                  "name": student.name,
                  "sex": student.sex,
                  "contact": student.contact,
                  "address": student.address,
                  "dept": student.dept,
                  "course": student.course,
                  "year": student.year,
                  "section": student.section}
                  for student in Student.objects.all()]
      return Response(students)

  def post(self, request):
    serializer = StudentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return Response(serializer.data)
    
  def delete(self, request, sid):
   try:
       student = Student.objects.get(sid=sid)
       student.delete()
       return Response(status=204)
   except Student.DoesNotExist:
       return Response(status=404)
   
  def put(self, request, sid=None):
      try:
          student = Student.objects.get(sid=sid)
      except Student.DoesNotExist:
          return Response(status=status.HTTP_404_NOT_FOUND)

      serializer = StudentSerializer(student, data=request.data)
      if serializer.is_valid():
          serializer.save()
          return Response(serializer.data, status=status.HTTP_200_OK)
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)