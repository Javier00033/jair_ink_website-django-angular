from rest_framework.views import APIView
from rest_framework.response import Response
from .models import About
from .serializers import AboutSerializer
from django.shortcuts import render

class AboutAPI(APIView):
    def get(self, request):
        about = About.objects.all()
        serializer = AboutSerializer(about, many=True)
        return Response(serializer.data)
    
def home(request):
    return render(request, 'home/index.html')

def about(request):
    return render(request, 'home/about.html')

def faq(request):
    return render(request, 'home/faq.html')