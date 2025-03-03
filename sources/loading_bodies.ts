//. FOR LOADING TOTAL BODIES NUMBERS


//. GETTING LINK TO IMAGES
let _03nj4n4: any = document.getElementById("_03nj4n4");



//. SENDING DATA TO PYTHON BACKEND
async function sendDataToBackend(data2:any, data3:any): Promise<any> {
    const csrfToken: any = document.querySelector('[name=csrfmiddlewaretoken]');
    let csrfToken_ = csrfToken.value;

    const formData = new FormData();
    formData.append('data', data2);
    formData.append('data2', data3);

    try {
        const response = await fetch('/get_calculated_data/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken_
            },
            body: formData
        });

        if (!response.ok) {
            message_popup("Network response was not ok");
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        return data; // This ensures the function returns the fetched data

    } catch (error) {
        console.error("Error:", error);
        return null; // Return null or handle errors appropriately
    }
}



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


//!
//. FUNCTION THAT GETS FURTHER DETAILS OF DISCOVERIES
function furtherDiscoveries(): any {
    //. getting ammonia world data
    let ammoniaLIST: string[] = [];
    let ammoniaWorld: any = document.getElementById("ammoniaID");

    if (ammoniaWorld) {
        //. getting checked values for ammonia worlds
        let ammoniaDSS: string = (document.getElementById("ammoniaWorlds") as HTMLInputElement).checked.toString();
        let ammoniaTerraformable: string = (document.getElementById("button1") as HTMLInputElement).checked.toString();
        let ammoniaFM: string = (document.getElementById("button2") as HTMLInputElement).checked.toString();
        let ammoniaFD: string = (document.getElementById("button3") as HTMLInputElement).checked.toString();
        let ammoniaMEB: string = (document.getElementById("button4") as HTMLInputElement).checked.toString();
        let ammoniaALL: string = (document.getElementById("button5") as HTMLInputElement).checked.toString();

        ammoniaLIST.push(
            ammoniaDSS, 
            ammoniaTerraformable, 
            ammoniaFM, 
            ammoniaFD, 
            ammoniaMEB, 
            ammoniaALL
        );

    } 


    //. getting earth like world data
    let earthLikeWorldLIST: string[] = [];
    let earthLikeWorld: any = document.getElementById("earthLikeWorldID");

    if (earthLikeWorld) {
        //. getting checked values for earth like worlds
        let ammoniaDSS: string = (document.getElementById("earthlikeworlds") as HTMLInputElement).checked.toString();
        let ammoniaTerraformable: string = (document.getElementById("button6") as HTMLInputElement).checked.toString();
        let ammoniaFM: string = (document.getElementById("button7") as HTMLInputElement).checked.toString();
        let ammoniaFD: string = (document.getElementById("button8") as HTMLInputElement).checked.toString();
        let ammoniaMEB: string = (document.getElementById("button9") as HTMLInputElement).checked.toString();
        let ammoniaALL: string = (document.getElementById("button10") as HTMLInputElement).checked.toString();

        earthLikeWorldLIST.push(
            ammoniaDSS, 
            ammoniaTerraformable, 
            ammoniaFM, 
            ammoniaFD, 
            ammoniaMEB, 
            ammoniaALL
        );

    } 



    //. getting water world data
    let waterWorldLIST: string[] = [];
    let waterWorld: any = document.getElementById("waterWorldID2");

    if (waterWorld) {
        //. getting checked values for earth like worlds
        let ammoniaDSS: string = (document.getElementById("waterWorldsID") as HTMLInputElement).checked.toString();
        let ammoniaTerraformable: string = (document.getElementById("button11") as HTMLInputElement).checked.toString();
        let ammoniaFM: string = (document.getElementById("button12") as HTMLInputElement).checked.toString();
        let ammoniaFD: string = (document.getElementById("button13") as HTMLInputElement).checked.toString();
        let ammoniaMEB: string = (document.getElementById("button14") as HTMLInputElement).checked.toString();
        let ammoniaALL: string = (document.getElementById("button15") as HTMLInputElement).checked.toString();

        waterWorldLIST.push(
            ammoniaDSS, 
            ammoniaTerraformable, 
            ammoniaFM, 
            ammoniaFD, 
            ammoniaMEB, 
            ammoniaALL
        );

    } 




    
    //. getting high metal content world data
    let hmcwLIST: string[] = [];
    let hmcw: any = document.getElementById("hmcwIDID");

    if (hmcw) {
        //. getting checked values for earth like worlds
        let ammoniaDSS: string = (document.getElementById("hmcws") as HTMLInputElement).checked.toString();
        let ammoniaTerraformable: string = (document.getElementById("button16") as HTMLInputElement).checked.toString();
        let ammoniaFM: string = (document.getElementById("button17") as HTMLInputElement).checked.toString();
        let ammoniaFD: string = (document.getElementById("button18") as HTMLInputElement).checked.toString();
        let ammoniaMEB: string = (document.getElementById("button19") as HTMLInputElement).checked.toString();
        let ammoniaALL: string = (document.getElementById("button20") as HTMLInputElement).checked.toString();

        hmcwLIST.push(
            ammoniaDSS, 
            ammoniaTerraformable, 
            ammoniaFM, 
            ammoniaFD, 
            ammoniaMEB, 
            ammoniaALL
        );

    } 




    //. getting gas giant class I data
    let gasGiant1LIST: string[] = [];
    let gasGiant1: any = document.getElementById("firstGasGiantID");

    if (gasGiant1) {
        //. getting checked values for earth like worlds
        let ammoniaDSS: string = (document.getElementById("class1gasgiant") as HTMLInputElement).checked.toString();
        let ammoniaFM: string = (document.getElementById("button22") as HTMLInputElement).checked.toString();
        let ammoniaFD: string = (document.getElementById("button23") as HTMLInputElement).checked.toString();
        let ammoniaMEB: string = (document.getElementById("button24") as HTMLInputElement).checked.toString();
        let ammoniaALL: string = (document.getElementById("button25") as HTMLInputElement).checked.toString();

        gasGiant1LIST.push(
            ammoniaDSS, 
            ammoniaFM, 
            ammoniaFD, 
            ammoniaMEB, 
            ammoniaALL
        );

    } 




    //. getting gas giant class II data
    let gasGiant2LIST: string[] = [];
    let gasGiant2: any = document.getElementById("SecondGasGiantID");

    if (gasGiant2) {
        //. getting checked values for earth like worlds
        let ammoniaDSS: string = (document.getElementById("class2gasgiant") as HTMLInputElement).checked.toString();
        let ammoniaFM: string = (document.getElementById("button26") as HTMLInputElement).checked.toString();
        let ammoniaFD: string = (document.getElementById("button27") as HTMLInputElement).checked.toString();
        let ammoniaMEB: string = (document.getElementById("button28") as HTMLInputElement).checked.toString();
        let ammoniaALL: string = (document.getElementById("button29") as HTMLInputElement).checked.toString();

        gasGiant2LIST.push(
            ammoniaDSS, 
            ammoniaFM, 
            ammoniaFD, 
            ammoniaMEB, 
            ammoniaALL
        );

    };
    


    //. getting gas giant class III data
    let gasGiant3LIST: string[] = [];
    let gasGiant3: any = document.getElementById("ThirdGasGiantID");

    if (gasGiant3) {
        //. getting checked values for earth like worlds
        let ammoniaDSS: string = (document.getElementById("class3gasgiant") as HTMLInputElement).checked.toString();
        let ammoniaFM: string = (document.getElementById("button30") as HTMLInputElement).checked.toString();
        let ammoniaFD: string = (document.getElementById("button31") as HTMLInputElement).checked.toString();
        let ammoniaMEB: string = (document.getElementById("button32") as HTMLInputElement).checked.toString();
        let ammoniaALL: string = (document.getElementById("button33") as HTMLInputElement).checked.toString();

        gasGiant3LIST.push(
            ammoniaDSS, 
            ammoniaFM, 
            ammoniaFD, 
            ammoniaMEB, 
            ammoniaALL
        );

    };
        


    let returnDict: Record<string, string[]> = {
        ammoniaData: ammoniaLIST,
        earthLikeWorldData: earthLikeWorldLIST,
        waterWorldData: waterWorldLIST,
        hmcwData: hmcwLIST,
        gasGiantOneData: gasGiant1LIST,
        gasGiantTwoData: gasGiant2LIST,
        gasGiantThreeData: gasGiant3LIST,
    };

    return returnDict
}





//!
//. FUNCTION THAT GETS INNER HTML FOR OPEN DETAILS
function get_innerHTML(): any {

    //. Ammonia Worlds
    let AmmoniaWorld_string: string = '';
    let AmmoniaWorld: any = document.getElementById('number_of_ammonia_worlds');

    //. elws
    let elw_string: string = '';
    let EarthLikeWorld: any = document.getElementById('number_of_elw');

    //. water worlds
    let waterWorld_string: string = '';
    let waterWorlds: any = document.getElementById('number_of_water-world');

    //. high metal content worlds
    let hmcw_string: string = '';
    let hmcw: any = document.getElementById('number_of_hmcw');

    //. gas giant class I
    let gas_giant_one_string: string = '';
    let gas_giant_one: any = document.getElementById('number_of_class1gasgiant');

    //. gas giant class II
    let gas_giant_two_string: string = '';
    let gas_giant_two: any = document.getElementById('number_of_class2gasgiant');

    //. gas giant class III
    let gas_giant_three_string: string = '';
    let gas_giant_three: any = document.getElementById('number_of_class3gasgiant');



    if (Number(AmmoniaWorld.innerHTML)) {

        AmmoniaWorld_string = `
        <div class="enteredBody" id="ammoniaID">
            <img src="${_03nj4n4.value}Ammonia-Planet.webp" alt="elite dangerous ammonia world">

            <div class="right-side-p">
                <p>Ammonia Worlds x${Number(AmmoniaWorld.innerHTML)}<span>.</span></p>

                <div class="links2submit">
                    <input type="checkbox" id="ammoniaWorlds" class="checkbox-button" value="">
                    <label for="ammoniaWorlds" class="button-label">DSS</label>

                    <input type="checkbox" id="button1" class="checkbox-button">
                    <label for="button1" class="button-label">Terraformable</label>

                    <input type="checkbox" id="button2" class="checkbox-button">
                    <label for="button2" class="button-label">FM</label>

                    <input type="checkbox" id="button3" class="checkbox-button">
                    <label for="button3" class="button-label">FD</label>

                    <input type="checkbox" id="button4" class="checkbox-button">
                    <label for="button4" class="button-label">MEB</label>

                    <input type="checkbox" id="button5" class="checkbox-button">
                    <label for="button5" class="button-label">All</label>
                </div>
            </div>


        </div>
        `
    };


    if (Number(EarthLikeWorld.innerHTML)) {
        elw_string = `
        <div class="enteredBody" id="earthLikeWorldID">
            <img src="${_03nj4n4.value}Earth-Like-World.webp" alt="elite dangerous earth like worlds">

            <div class="right-side-p">
                <p>Earth Like Worlds x${Number(EarthLikeWorld.innerHTML)}<span>.</span></p>

                <div class="links2submit">
                    <input type="checkbox" id="earthlikeworlds" class="checkbox-button" value="">
                    <label for="earthlikeworlds" class="button-label">DSS</label>

                    <input type="checkbox" id="button6" class="checkbox-button">
                    <label for="button6" class="button-label" id="checked">Terraformable</label>

                    <input type="checkbox" id="button7" class="checkbox-button">
                    <label for="button7" class="button-label">FM</label>

                    <input type="checkbox" id="button8" class="checkbox-button">
                    <label for="button8" class="button-label">FD</label>

                    <input type="checkbox" id="button9" class="checkbox-button">
                    <label for="button9" class="button-label">MEB</label>

                    <input type="checkbox" id="button10" class="checkbox-button">
                    <label for="button10" class="button-label">All</label>
                </div>
            </div>


        </div>
        `
    };


    if (Number(waterWorlds.innerHTML)) {

        waterWorld_string = `
        <div class="enteredBody" id="waterWorldID2">
            <img src="${_03nj4n4.value}Water-World.webp" alt="elite dangerous water worlds">

            <div class="right-side-p">
                <p>Water Worlds x${Number(waterWorlds.innerHTML)}<span>.</span></p>

                <div class="links2submit">
                    <input type="checkbox" id="waterWorldsID" class="checkbox-button" value="">
                    <label for="waterWorldsID" class="button-label">DSS</label>

                    <input type="checkbox" id="button11" class="checkbox-button">
                    <label for="button11" class="button-label">Terraformable</label>

                    <input type="checkbox" id="button12" class="checkbox-button">
                    <label for="button12" class="button-label">FM</label>

                    <input type="checkbox" id="button13" class="checkbox-button">
                    <label for="button13" class="button-label">FD</label>

                    <input type="checkbox" id="button14" class="checkbox-button">
                    <label for="button14" class="button-label">MEB</label>

                    <input type="checkbox" id="button15" class="checkbox-button">
                    <label for="button15" class="button-label">All</label>
                </div>
            </div>


        </div>
        `
    };


    if (Number(hmcw.innerHTML)) {

        hmcw_string = `
        <div class="enteredBody" id="hmcwIDID">
            <img src="${_03nj4n4.value}hmcw.webp" alt="elite dangerous high metal content worlds">

            <div class="right-side-p">
                <p>High Metal Content Worlds x${Number(hmcw.innerHTML)}<span>.</span></p>

                <div class="links2submit">
                    <input type="checkbox" id="hmcws" class="checkbox-button" value="">
                    <label for="hmcws" class="button-label">DSS</label>

                    <input type="checkbox" id="button16" class="checkbox-button">
                    <label for="button16" class="button-label">Terraformable</label>

                    <input type="checkbox" id="button17" class="checkbox-button">
                    <label for="button17" class="button-label">FM</label>

                    <input type="checkbox" id="button18" class="checkbox-button">
                    <label for="button18" class="button-label">FD</label>

                    <input type="checkbox" id="button19" class="checkbox-button">
                    <label for="button19" class="button-label">MEB</label>

                    <input type="checkbox" id="button20" class="checkbox-button">
                    <label for="button20" class="button-label">All</label>
                </div>
            </div>


        </div>
        `
    };


    if (Number(gas_giant_one.innerHTML)) {

        gas_giant_one_string = `
        <div class="enteredBody" id="firstGasGiantID">
            <img src="${_03nj4n4.value}gas-giant-v1.webp" alt="elite dangerous class one gas giants">

            <div class="right-side-p">
                <p>Class I Gas Giant x${Number(gas_giant_one.innerHTML)}<span>.</span></p>

                <div class="links2submit">
                    <input type="checkbox" id="class1gasgiant" class="checkbox-button" value="">
                    <label for="class1gasgiant" class="button-label">DSS</label>

                    <input type="checkbox" id="button22" class="checkbox-button">
                    <label for="button22" class="button-label">FM</label>

                    <input type="checkbox" id="button23" class="checkbox-button">
                    <label for="button23" class="button-label">FD</label>

                    <input type="checkbox" id="button24" class="checkbox-button">
                    <label for="button24" class="button-label">MEB</label>

                    <input type="checkbox" id="button25" class="checkbox-button">
                    <label for="button25" class="button-label">All</label>
                </div>
            </div>


        </div>
        `
    };


    if (Number(gas_giant_two.innerHTML)) {

        gas_giant_two_string = `
        <div class="enteredBody" id="SecondGasGiantID">
            <img src="${_03nj4n4.value}gas-giant-v2.webp" alt="elite dangerous class two gas giants">

            <div class="right-side-p">
                <p>Class II Gas Giant x${Number(gas_giant_two.innerHTML)}<span>.</span></p>

                <div class="links2submit">
                    <input type="checkbox" id="class2gasgiant" class="checkbox-button" value="">
                    <label for="class2gasgiant" class="button-label">DSS</label>

                    <input type="checkbox" id="button26" class="checkbox-button">
                    <label for="button26" class="button-label">FM</label>

                    <input type="checkbox" id="button27" class="checkbox-button">
                    <label for="button27" class="button-label">FD</label>

                    <input type="checkbox" id="button28" class="checkbox-button">
                    <label for="button28" class="button-label">MEB</label>

                    <input type="checkbox" id="button29" class="checkbox-button">
                    <label for="button29" class="button-label">All</label>
                </div>
            </div>


        </div>
        `
    };


    if (Number(gas_giant_three.innerHTML)) {

        gas_giant_three_string = `
        <div class="enteredBody" id="ThirdGasGiantID">
            <img src="${_03nj4n4.value}gas-giant-v3.webp" alt="elite dangerous class 3 gas giants">

            <div class="right-side-p">
                <p>Class III Gas Giant x${Number(gas_giant_three.innerHTML)}<span>.</span></p>

                <div class="links2submit">
                    <input type="checkbox" id="class3gasgiant" class="checkbox-button" value="">
                    <label for="class3gasgiant" class="button-label">DSS</label>

                    <input type="checkbox" id="button30" class="checkbox-button">
                    <label for="button30" class="button-label">FM</label>

                    <input type="checkbox" id="button31" class="checkbox-button">
                    <label for="button31" class="button-label">FD</label>

                    <input type="checkbox" id="button32" class="checkbox-button">
                    <label for="button32" class="button-label">MEB</label>

                    <input type="checkbox" id="button33" class="checkbox-button">
                    <label for="button33" class="button-label">All</label>
                </div>
            </div>


        </div>
        `

    };




    let returnDict: Record<string, string> = {
        ammoniaCheck: AmmoniaWorld.innerHTML,
        elwCheck: EarthLikeWorld.innerHTML,
        waterWorldCheck: waterWorlds.innerHTML,
        hmcwCheck: hmcw.innerHTML,
        gg1Check: gas_giant_one.innerHTML,
        gg2Check: gas_giant_two.innerHTML,
        gg3Check: gas_giant_three.innerHTML,
    };
    
    


    let all_together: string = `
        ${AmmoniaWorld_string}
        ${elw_string}
        ${waterWorld_string}
        ${hmcw_string}
        ${gas_giant_one_string}
        ${gas_giant_two_string}
        ${gas_giant_three_string}
    `



    let openDetailsInnerHTML: string = `
    <h1>Enter in more details about your discoveries!</h1>
    <h3>All bodies will be assigned FSS</h3>
    <hr>

    <div class="more_details_sections">

        <form id="enteredBodiesForm">
        
            ${all_together}


            <div class="bottomButton">   
                <button type="submit">Calculate</button>
            </div>


        </form>



    </div>

    `;
    return [openDetailsInnerHTML, returnDict]
};



//. FUNCTION THAT CLOSES THE OVERLAY
function closeOverlay(): void {
    //. get overlay and add new div to it
    let overlayID: any = document.getElementById("overlayID");

    // Remove the <div> to the body
    document.body.removeChild(overlayID);

    //. clear all inputs

};



//!
//. FUNCTION THAT OPENS UP LAST HTML AFTER CREDITS HAVE BEEN CALCULATED
function openFinalHTML(total_credits:any): void {
    //. hide the edit panel
    let editPanel: any = document.getElementById("more_details_explorerID");
    editPanel.style.display = "none";

    //. get overlay and add new div to it
    let overlayID: any = document.getElementById("overlayID");
    

    let mainHTML: string = `
    <div class="final_credits_calculated">
        <h1>Your Total Credits Earned!</h1>
        <p>${total_credits} CR</p>


        <button onclick="closeOverlay()">Close</button>

    </div>
    `

    overlayID.innerHTML = mainHTML;
}




//. FUNCTION THAT OPENS MORE DETAILS ELEMENT
async function more_details(): Promise<void> {
    //. than make message pop up, fixed position and disappears in 3 seconds

    //. creating overlay
    const overlay = document.createElement('div');
    overlay.id = 'overlayID'

    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#000000c2';

    let returnState: any = get_innerHTML();
    let get_innerHTML2: string = returnState[0];
    let returnDictStr: string = JSON.stringify(returnState[1]);

    // //. keep oringial data
    // let OG_data: any = returnState[1]; // for openFinalHTML


    let mainHTML: string = `
    <div class="more_details_explorer" id="more_details_explorerID">
        ${get_innerHTML2}
    </div>
    `

    overlay.innerHTML = mainHTML;

    // Append the <div> to the body
    document.body.appendChild(overlay);



    let enteredBodiesForm: any = document.getElementById("enteredBodiesForm");


    if (enteredBodiesForm) {
        enteredBodiesForm.addEventListener("submit", async function(event:any) {
            event.preventDefault();



            let furtherDetails: any = furtherDiscoveries();
            furtherDetails = JSON.stringify(furtherDetails);


            let totalCredits: any = await sendDataToBackend(returnDictStr, furtherDetails);

            openFinalHTML(totalCredits.total_credits);

        })
    }

}




//| END OF LOADING BODIES