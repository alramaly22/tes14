from django.shortcuts import render
from django.http import JsonResponse
import json
import requests
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'accounts/index.html')

def about(request):
    return render(request, 'accounts/about.html')

def calc(request):
    return render(request, 'accounts/calc.html')

def test2(request):
    return render(request, 'accounts/test2.html')

def package1(request):
    return render(request, 'accounts/package1.html')
def package2(request):
    return render(request, 'accounts/package2.html')
def package3(request):
    return render(request, 'accounts/package3.html')
def package4(request):
    return render(request, 'accounts/package4.html')
def email1(request):
    return render(request, 'accounts/email1.html')
def email2(request):
    return render(request, 'accounts/email2.html')
def email3(request):
    return render(request, 'accounts/email3.html')
def email4(request):
    return render(request, 'accounts/email4.html')    
def email5(request):
    return render(request, 'accounts/email5.html')
def email6(request):
    return render(request, 'accounts/email6.html')
def email7(request):
    return render(request, 'accounts/email7.html')
def email8(request):
    return render(request, 'accounts/email8.html')
def email9(request):
    return render(request, 'accounts/email9.html')
def email10(request):
    return render(request, 'accounts/email10.html')
def email11(request):
    return render(request, 'accounts/email11.html')
  
@csrf_exempt
def fawaterak_webhook(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print("✅ Webhook data received:", data)
        return JsonResponse({'status': 'received'})
    return JsonResponse({'status': 'not allowed'}, status=405)

# دالة للحصول على IP المستخدم الحقيقي
# دالة للحصول على IP المستخدم الحقيقي
def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

# دالة تجيب بيانات الموقع الجغرافي
def location_view(request):
    ip_address = get_client_ip(request)
    url = f"https://ipinfo.io/{ip_address}/json?token=5f01ba4857444e"
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            country = data.get("country", "US")
            
            # تحديد العملة واللغة بناءً على الدولة
            if country == "EG":
                return JsonResponse({"currency": "EGP", "language": "ar"})
            elif country == "SA":
                return JsonResponse({"currency": "SAR", "language": "ar"})
            elif country == "AE":
                return JsonResponse({"currency": "AED", "language": "ar"})
            else:
                return JsonResponse({"currency": "USD", "language": "en"})
    except Exception as e:
        return JsonResponse({"error": "لم نتمكن من الحصول على المعلومات"}, status=400)