//. CHECKING THE CHECK BOXES




//. FUNCTION THAT DEALS WITH BACKEND FUNCTION
function getting_backend_data(data:any): void {
    const csrfToken:any = document.querySelector('[name=csrfmiddlewaretoken]');
    let csrfToken_ = csrfToken.value;

    const formData = new FormData();
    formData.append('data', data);
    
    fetch('/get_calculated_data/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrfToken_
      },
      body: formData
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data)

    });
    
}








//. FUNCTION TO GET DATA
function get_celestial_info(body_type:string, dss_id:string, terraformable:string, fm:string, fd:string, meb:string, ALL:string): string[] {
    
    //. grab the number of earth like worlds
    let n_earth_like_worlds: any = document.getElementById(body_type);
    //. grab dss boolean
    let dss_elwBoolean: any = document.getElementById(dss_id);

    //. grab terraformable bool
    let terraformableBool: any = document.getElementById(terraformable);


    //. first mapped bool
    let first_mapped: any = document.getElementById(fm);

    //. first discovered bool
    let first_discovered: any = document.getElementById(fd);


    //. mapped with efficiency bool
    let mapped_with_efficiency: any = document.getElementById(meb);

    //. all bool
    let all: any = document.getElementById(ALL);

    
    
    return [n_earth_like_worlds.value, dss_elwBoolean.checked, terraformableBool.checked, first_mapped.checked, first_discovered.checked, mapped_with_efficiency.checked, all.checked]
}











//. FORM VAR AND SUBMISSION
let formVar: any = document.getElementById("celestial_inputs_formID");



if (formVar) {
    formVar.addEventListener('submit', function(event:any) {
        event.preventDefault();
        

        let earthLikeWorldsData: any = get_celestial_info("earthLikeWorlds", "earthLikeWorlds-check", "button2", "button3", "button4", "button5", "button6")
        let AmmoniaWorldsData: any = get_celestial_info("AmmoniaWorlds", "bttn7", "bttn8", "bttn9", "bttn10", "bttn11", "bttn12")
        let water_world_data:any = get_celestial_info("waterworlds", "bttn13", "bttn14", "bttn15", "bttn16", "bttn17", "bttn18")

        let returnData: string = `${earthLikeWorldsData};${AmmoniaWorldsData};${water_world_data}`

        getting_backend_data(returnData);

    });
};




//. FUNCTION TO CLEAR INPUTS
function clear_inputs(): void {
    
}
