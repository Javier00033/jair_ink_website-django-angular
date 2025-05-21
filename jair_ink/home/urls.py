from django.urls import path
from .views import AboutAPI, home
from . import views

urlpatterns = [
    path('', home, name='home'),
    path('about/', views.about, name='about'),
    path('api/about/', AboutAPI.as_view(), name='about_api'),
    path('faq/', views.faq, name='faq'),
    path('api/faq/', AboutAPI.as_view(), name='faq_api'),
]