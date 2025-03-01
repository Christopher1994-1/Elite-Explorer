//. FOR LOADING TOTAL BODIES NUMBERS



//. FUNCTION THAT SHOWS THANK YOU MESSAGE ON INDEX PAGE
function message_popup(message:string): void {

    //. than make message pop up, fixed position and disappears in 3 seconds
    const thankYouDiv = document.createElement('div');
    thankYouDiv.style.position = 'fixed';
    thankYouDiv.style.top = '7%';
    thankYouDiv.style.left = '50%';
    thankYouDiv.style.transform = 'translate(-50%, -50%)';
    thankYouDiv.style.padding = '20px';
    thankYouDiv.style.backgroundColor = '#f9f9f9';
    thankYouDiv.style.border = '1px solid #ccc';
    thankYouDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    thankYouDiv.style.zIndex = '1000';


    // Add content to the <div>
    thankYouDiv.textContent = message;

    // Add an ID to the <div> for easier management
    thankYouDiv.id = 'thank-you-div';

    // Append the <div> to the body
    document.body.appendChild(thankYouDiv);

    setTimeout(function() {
        let thankYouDiv2: any = document.getElementById('thank-you-div');
        thankYouDiv2.style.display = 'none';
        document.body.removeChild(thankYouDiv);
    }, 3000);

};


    
//. FUNCTION THAT ADDS A NUMBER
function add_new_body(id_name: string): void {
    //. get the element
    let element:any = document.getElementById(id_name);

    let number: number = Number(element.innerHTML);

    let newNumber: number = number + 1;

    if (newNumber == 99) {
        message_popup("Limit of bodies exceeded: you didnt find 100 bodies lol");
    } else {
        element.innerHTML = newNumber;
    };
};



//. FUNCTION THAT REMOVES A NUMBER
function remove_body(id_name: string): void {
    //. get the element
    let element:any = document.getElementById(id_name);

    let number: number = Number(element.innerHTML);

    if (number == 0) {
        message_popup("Number cannot be negative!");
    } else {
        let newNumber: number = number - 1;
        element.innerHTML = newNumber;
    };
    
}




//. FUNCTION THAT GETS INNER HTML FOR OPEN DETAILS
function get_innerHTML(): string {

    //. get Ammonia World data
    let AmmoniaWorld_string: string = '';
    let AmmoniaWorld: any = document.getElementById('number_of_ammonia_worlds');
    if (AmmoniaWorld.innerHTML) {
        AmmoniaWorld_string = `
        <img src="/static/images/Ammonia-Planet.webp" alt="elite dangerous ammonia world">
        <div class="links2submit">
            <input type="checkbox" id="earthLikeWorlds-check" class="checkbox-button" value="">
            <label for="earthLikeWorlds-check" class="button-label">DSS</label>

            <input type="checkbox" id="button2" class="checkbox-button">
            <label for="button2" class="button-label" id="checked">Terraformable</label>

            <input type="checkbox" id="button3" class="checkbox-button">
            <label for="button3" class="button-label">FM</label>

            <input type="checkbox" id="button4" class="checkbox-button">
            <label for="button4" class="button-label">FD</label>

            <input type="checkbox" id="button5" class="checkbox-button">
            <label for="button5" class="button-label">MEB</label>

            <input type="checkbox" id="button6" class="checkbox-button">
            <label for="button6" class="button-label">All</label>
        </div>
        `

    }

    let openDetailsInnerHTML: string = `
    <h1>Enter in more details about your discoveries!</h1>
    <hr>

    <div class="more_details_sections">

        <div class="enteredBody">
            ${AmmoniaWorld_string}
        </div>

    </div>

    `;
    return openDetailsInnerHTML;
};





//. FUNCTION THAT OPENS MORE DETAILS ELEMENT
function more_details(): void {
    //. than make message pop up, fixed position and disappears in 3 seconds
    const more_details_explorer = document.createElement('div');


    more_details_explorer.style.position = 'fixed';
    more_details_explorer.style.top = '7%';
    more_details_explorer.style.left = '50%';
    more_details_explorer.style.transform = 'translate(-50%, -50%)';


    // Add an ID to the <div> for easier management
    more_details_explorer.className = 'more_details_explorer';


    more_details_explorer.innerHTML = get_innerHTML();

    // Append the <div> to the body
    document.body.appendChild(more_details_explorer);

}




//| END OF LOADING BODIES