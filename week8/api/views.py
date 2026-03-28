import json
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .models import Product, Category

def product_to_dict(p):
    return {
        'id': p.id,
        'name': p.name,
        'price': p.price,
        'description': p.description,
        'count': p.count,
        'is_active': p.is_active,
        'category_id': p.category_id,
    }

def category_to_dict(c):
    return {
        'id': c.id,
        'name': c.name,
    }

def products_list(request):
    products = Product.objects.all()
    return JsonResponse([product_to_dict(p) for p in products], safe=False)

def product_detail(request, id):
    try:
        p = Product.objects.get(pk=id)
        return JsonResponse(product_to_dict(p))
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

def categories_list(request):
    categories = Category.objects.all()
    return JsonResponse([category_to_dict(c) for c in categories], safe=False)

def category_detail(request, id):
    try:
        c = Category.objects.get(pk=id)
        return JsonResponse(category_to_dict(c))
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    return JsonResponse([product_to_dict(p) for p in products], safe=False)