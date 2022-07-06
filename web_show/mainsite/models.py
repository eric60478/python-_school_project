from django.db import models
from django.utils import timezone
# Create your models here.
class info(models.Model):
    title = models.CharField(max_length=200)
    number_of_content = models.CharField(max_length=200)
    
    def __str__(self):
        return self.title#because return we can use Post.objects.all() to see