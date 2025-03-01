from django.shortcuts import render
from django.http import JsonResponse
from . import cal

# Create your views here.



def index(request):
    return render(request, 'index.html', {})




#. processing celestial body credits
def get_calculated_data(request) -> JsonResponse:
    if request.method == 'POST':
        data = request.POST.get('data')
        
        print(data)
        
        
        # Return the comments as JSON
        return JsonResponse({'data': 'fuck you'})
    
    # Return an error response if the method is not POST
    return JsonResponse({'error': 'Invalid request method'}, status=400)
    