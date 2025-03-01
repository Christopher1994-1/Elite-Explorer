from django.shortcuts import render
from django.http import JsonResponse
from . import calculate_celestial_bodies

# Create your views here.



def index(request):
    return render(request, 'index.html', {})












#. processing celestial body credits
def get_calculated_data(request) -> JsonResponse:
    if request.method == 'POST':
        data = str(request.POST.get('data')).split(";")
        
        a = [i for i in data[0].split(',')]
        elw_data: int = calculate_celestial_bodies.calculate_earth_like_world(int(a[0] or 0), a[1], a[2], a[3], a[4], a[5], a[6])
        print(elw_data)

        b = [b1 for b1 in data[1].split(',')]
        ammonia_worlds: int = calculate_celestial_bodies.calculate_ammonia_world(int(b[0] or 0), b[1], b[2], b[3], b[4], b[5], b[6])
        print(ammonia_worlds)
        
        
        c = [i for i in data[1].split(',')]
        water_worlds: int = calculate_celestial_bodies.calculate_ammonia_world(int(c[0] or 0), c[1], c[2], c[3], c[4], c[5], c[6])
        print(water_worlds)
        
        
        
        
        total_sum = sum([elw_data, ammonia_worlds, water_worlds])

        
        # Return the comments as JSON
        return JsonResponse({'data': total_sum})
    
    # Return an error response if the method is not POST
    return JsonResponse({'error': 'Invalid request method'}, status=400)
    