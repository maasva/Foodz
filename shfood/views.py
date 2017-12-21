from django.shortcuts import render
from .models import FoodzUser, Invitation
from django.utils import timezone

# Create your views here.
def dashboard(request):
    invitations = Invitation.objects.order_by('date_time')
    return render(request, 'shfood/dashboard.html', {'invitations': invitations})

def index(request):
    return render(request, 'shfood/index.html')

def login(request):
    return render(request, 'shfood/login.html')

def signup(request):
    return render(request, 'shfood/signup.html')
