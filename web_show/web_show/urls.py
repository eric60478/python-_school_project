
from django.contrib import admin
from django.urls import path
from mainsite.views import homepage #showpost
from mainsite.views import knowledgegraph


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage),#give url http://127.0.0.1:8000 show but +??no show     
    path('knowledgegraph/', knowledgegraph),      
]
