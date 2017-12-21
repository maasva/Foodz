from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.dashboard, name='dashboard'),
    url(r'^$', views.index, name = 'index'),
    url(r'^$', views.login, name = 'login'),
    url(r'^$', views.signup, name = 'signup'),
]
