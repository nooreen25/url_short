from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.enter_url,name='enter'),
    url(r'^shorten',views.shorten,name='shorten'),
	#url(r'^newurl',views.redirect_original,name='newurl'),
	url(r'^(?P<url>\w+)$',views.redirect_original,name='newurl'),
	
   
    
]
