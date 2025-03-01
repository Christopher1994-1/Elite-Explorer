from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name=""),
    
    
    
    
    #. website functions
    path("get_calculated_data/", views.get_calculated_data, name="get_calculated_data")
]
