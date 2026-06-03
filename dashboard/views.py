from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>My Portfolio is Running 🚀</h1>")