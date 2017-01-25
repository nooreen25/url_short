from django.shortcuts import render
from models import *
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import get_object_or_404


def enter_url(request):
	
	return render(request,'enter.html')


def shorten(request):
	longurl=request.POST['long_url']
	shorturl=request.POST['short_url']
	url="http://localhost:8000/"+shorturl
	query=Url(long_url=longurl,short_url=url) 
	query.save()
	return HttpResponse(url)

	


def redirect_original(request, url):
	url="http://localhost:8000/"+url
	newurl = get_object_or_404(Url,short_url=url) 	
	return HttpResponseRedirect(newurl.long_url)




