from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.utama, name='halaman_utama'),
]
