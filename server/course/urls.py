from django.urls import path
from django.conf.urls import url 
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('getcourses',views.getcourses, name='getcourses'),
    path('createcourse',views.createcourse, name='createcourse'),
    url('getmycourse/(?P<id>[0-9]+)$',views.getmycourse, name='getmycourse'),
    url('updatecourse/(?P<id>[0-9]+)$',views.updatecourse, name='updatecourse'),
    url('deletecourse/(?P<id>[0-9]+)$',views.deletecourse, name='deletecourse'),
]