from django.urls import path
from .views import StudentView

urlpatterns = [
  path('<int:sid>', StudentView.as_view()),
  path('name=<str:name>', StudentView.as_view()),
]