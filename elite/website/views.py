from django.shortcuts import render
from django.http import JsonResponse
from . import calculate_celestial_bodies
import json

# Create your views here.


#. LINK TO IMAGES
LINK2IMAGES: str = "/static/images/"




standard_context = {
    "3nj4n4": LINK2IMAGES
}






def index(request):
    context = {}
    context.update(standard_context)
    return render(request, 'index.html', context)








#. FUNCTION THAT SEPERATES TOTAL CREDITS BY ,
def separate(total_credits: str) -> str:

    return f"{int(total_credits):,}"





# let returnDict: Record<string, string> = {
#     ammoniaCheck: AmmoniaWorld.innerHTML,
#     elwCheck: EarthLikeWorld.innerHTML,
#     waterWorldCheck: waterWorlds.innerHTML,
#     hmcwCheck: hmcw.innerHTML,
#     gg1Check: gas_giant_one.innerHTML,
#     gg2Check: gas_giant_two.innerHTML,
#     gg3Check: gas_giant_three.innerHTML,
# };
    



#. processing celestial body credits
def get_calculated_data(request) -> JsonResponse:
    if request.method == 'POST':
        data = request.POST.get('data') # number of planets
        data2 = request.POST.get('data2') # scan data
        
        
        numberOfBodies: dict = json.loads(data)
        discoveryData: dict = json.loads(data2)
        
        
        # print(numberOfBodies)
        # print()
        # print(discoveryData)

        #. EARTH LIKE WORLD CALCULATIONS
        earthLike = discoveryData.get("earthLikeWorldData", [])  # Get the list safely
        earthLike += ['false'] * (6 - len(earthLike))  # Extend to at least 6 items
        elw_data: int = calculate_celestial_bodies.calculate_earth_like_world(int(numberOfBodies['elwCheck']),earthLike[0],earthLike[1],earthLike[2],earthLike[3],earthLike[4],earthLike[5])
        
        
        
        
        #. AMMONIA WORLD CALCULATIONS
        ammonia_data = discoveryData.get("ammoniaData", [])  # Get the list safely
        ammonia_data += ['false'] * (6 - len(ammonia_data))  # Extend to at least 6 items
        ammonia_worlds: int = calculate_celestial_bodies.calculate_ammonia_world(
            int(numberOfBodies['ammoniaCheck']),
            ammonia_data[0],
            ammonia_data[1],
            ammonia_data[2],
            ammonia_data[3],
            ammonia_data[4],
            ammonia_data[5],
        )
        
        

        #. WATER WORLD CALCULATIONS
        waterworld_data = discoveryData.get("waterWorldData", [])  # Get the list safely
        waterworld_data += ['false'] * (6 - len(waterworld_data))  # Extend to at least 6 items
        water_worlds: int = calculate_celestial_bodies.calculate_water_world(
            int(numberOfBodies['waterWorldCheck']), 
            waterworld_data[0],
            waterworld_data[1],
            waterworld_data[2],
            waterworld_data[3],
            waterworld_data[4],
            waterworld_data[5],
        )
        
        
        
        
        
        
        #. HIGH METAL CONTENT WORLD CALCULATIONS
        hmcw_data = discoveryData.get("hmcwData", [])  # Get the list safely
        hmcw_data += ['false'] * (6 - len(hmcw_data))  # Extend to at least 6 items
        highMetalContentWorld: int = calculate_celestial_bodies.calculate_high_metal_content_planet(
            int(numberOfBodies['hmcwCheck']), 
            waterworld_data[0],
            waterworld_data[1],
            waterworld_data[2],
            waterworld_data[3],
            waterworld_data[4],
            waterworld_data[5],
        )
        
        
        
        
        
        
        #. GAS GIANT CLASS I CALCULATIONS
        gasgiant1 = discoveryData.get("gasGiantOneData", [])  # Get the list safely
        gasgiant1 += ['false'] * (6 - len(gasgiant1))  # Extend to at least 6 items
        gasGiantNumber: int = calculate_celestial_bodies.calculate_gas_giant_class_one(
            int(numberOfBodies['gg1Check']), 
            waterworld_data[0],
            waterworld_data[1],
            waterworld_data[2],
            waterworld_data[3],
            waterworld_data[4],
        )
        
        
        
        #. GAS GIANT CLASS II CALCULATIONS
        gasgiant2 = discoveryData.get("gasGiantTwoData", [])  # Get the list safely
        gasgiant2 += ['false'] * (6 - len(gasgiant2))  # Extend to at least 6 items
        gasGiantNumber2: int = calculate_celestial_bodies.calculate_gas_giant_class_two(
            int(numberOfBodies['gg2Check']), 
            waterworld_data[0],
            waterworld_data[1],
            waterworld_data[2],
            waterworld_data[3],
            waterworld_data[4],
        )
        
        
                
        #. GAS GIANT CLASS III CALCULATIONS
        gasgiant3 = discoveryData.get("gasGiantThreeData", [])  # Get the list safely
        gasgiant3 += ['false'] * (6 - len(gasgiant3))  # Extend to at least 6 items
        gasGiantNumber3: int = calculate_celestial_bodies.calculate_gas_giant_class_three(
            int(numberOfBodies['gg3Check']), 
            waterworld_data[0],
            waterworld_data[1],
            waterworld_data[2],
            waterworld_data[3],
            waterworld_data[4],
        )
        
        
        
        
        
        
        
        
        
        total_sum:str = str(sum([
            ammonia_worlds, elw_data, water_worlds, highMetalContentWorld, gasGiantNumber,
            gasGiantNumber2, gasGiantNumber3
        ]))
        
        
        
        returnData = {
            "total_credits": separate(total_sum),
            
        }

        
        # Return the comments as JSON
        return JsonResponse(returnData)
    
    # Return an error response if the method is not POST
    return JsonResponse({'error': 'Invalid request method'}, status=400)
    