from django.http import HttpResponse
from django.shortcuts import get_object_or_404,render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from course.models import Course
from course.serializers import CourseSerializer
from rest_framework.decorators import api_view

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def getcourses(request):
        courses = Course.objects.all()        
        title = request.GET.get('title', None)
        if title is not None:
            courses = courses.filter(title__icontains=title)
        
        courses_serializer = CourseSerializer(courses, many=True)
        return JsonResponse(courses_serializer.data, safe=False)
    
@csrf_exempt
def createcourse(request):
 

        course_data = JSONParser().parse(request)
        course_serializer = CourseSerializer(data=course_data)
        if course_serializer.is_valid():
            course_serializer.save()
            return JsonResponse(course_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(course_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
def getmycourse(request, id):
   
      try: 
        course = Course.objects.get(id=id) 
        
      except Course.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND)  
      course_serializer = CourseSerializer(course) 
      return JsonResponse(course_serializer.data)

@csrf_exempt   
def updatecourse(request, id):
      try: 
        course = Course.objects.get(id=id) 
        
      except Course.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
        
      course_data = JSONParser().parse(request) 
      course_serializer = CourseSerializer(course, data=course_data) 
      if course_serializer.is_valid(): 
          course_serializer.save() 
          return JsonResponse(course_serializer.data) 
      return JsonResponse(course_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
@csrf_exempt     
def deletecourse(request, id):
   
   try: 
        course = Course.objects.get(id=id) 
        
   except Course.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
   course.delete() 
   return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

       