from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about.html', views.about, name='about'),
    path('test2.html', views.test2, name='test2'),
    path('calc/', views.calc, name='calc'),
    path('package1.html', views.package1, name='package1'),
    path('package2.html', views.package2, name='package2'),
    path('package3.html', views.package3, name='package3'),
    path('package4.html', views.package4, name='package4'),
    path('email1.html', views.email1, name='email1'),
    path('email2.html', views.email2, name='email2'),
    path('email3.html', views.email3, name='email3'),
    path('email4.html', views.email4, name='email4'),
    path('email5.html', views.email5, name='email5'),
    path('email6.html', views.email6, name='email6'),
    path('email7.html', views.email7, name='email7'),
    path('email8.html', views.email8, name='email8'),
    path('email9.html', views.email9, name='email9'),
    path('email10.html', views.email10, name='email10'),
    path('email11.html', views.email11, name='email11'),
    path('location/', views.location_view, name='location'),

    # ✅ Webhook endpoint for Fawaterak
    path('webhook/fawaterak/', views.fawaterak_webhook, name='fawaterak_webhook'),

    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
