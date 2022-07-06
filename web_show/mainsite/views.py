from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from datetime import datetime
from .models import info
from mainsite import models
from django.shortcuts import redirect
from django.core import serializers
import pandas as pd
from collections import OrderedDict

def homepage (request):#when accept request do thing
    infos = info.objects.all()#self add can control#posts is all collection of Post co it have title body...    
    now = datetime.now()
    return render (request, 'homepage.html',locals())#locals is contain upper like posts now

def knowledgegraph(request):    
    item=info.objects.all().values()
    df=pd.DataFrame(item)
    name=df['title'].tolist()
    number_of_content=df['number_of_content'].tolist()
    mydict={
        'name':name,
        'number_of_content':number_of_content
    }
    return render (request, 'knowledgegraph.html',context=mydict)#locals is contain upper like posts now