from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Url(models.Model):
	long_url=models.URLField(max_length=200)
	short_url=models.URLField(max_length=200)
	timestamp=models.DateTimeField(auto_now=True,auto_now_add=False)

	def __unicode__(self):
		return self.long_url
