"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let _03nj4n4 = document.getElementById("_03nj4n4");
function sendDataToBackend(data2, data3) {
    return __awaiter(this, void 0, void 0, function* () {
        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
        let csrfToken_ = csrfToken.value;
        const formData = new FormData();
        formData.append('data', data2);
        formData.append('data2', data3);
        try {
            const response = yield fetch('/get_calculated_data/', {
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
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error:", error);
            return null;
        }
    });
}
function message_popup(message) {
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
    thankYouDiv.textContent = message;
    thankYouDiv.id = 'thank-you-div';
    document.body.appendChild(thankYouDiv);
    setTimeout(function () {
        let thankYouDiv2 = document.getElementById('thank-you-div');
        thankYouDiv2.style.display = 'none';
        document.body.removeChild(thankYouDiv);
    }, 3000);
}
;
function add_new_body(id_name) {
    let element = document.getElementById(id_name);
    let number = Number(element.innerHTML);
    let newNumber = number + 1;
    if (newNumber == 99) {
        message_popup("Limit of bodies exceeded: you didnt find 100 bodies lol");
    }
    else {
        element.innerHTML = newNumber;
    }
    ;
}
;
function remove_body(id_name) {
    let element = document.getElementById(id_name);
    let number = Number(element.innerHTML);
    if (number == 0) {
        message_popup("Number cannot be negative!");
    }
    else {
        let newNumber = number - 1;
        element.innerHTML = newNumber;
    }
    ;
}
function furtherDiscoveries() {
    let ammoniaLIST = [];
    let ammoniaWorld = document.getElementById("ammoniaID");
    if (ammoniaWorld) {
        let ammoniaDSS = document.getElementById("ammoniaWorlds").checked.toString();
        let ammoniaTerraformable = document.getElementById("button1").checked.toString();
        let ammoniaFM = document.getElementById("button2").checked.toString();
        let ammoniaFD = document.getElementById("button3").checked.toString();
        let ammoniaMEB = document.getElementById("button4").checked.toString();
        let ammoniaALL = document.getElementById("button5").checked.toString();
        ammoniaLIST.push(ammoniaDSS, ammoniaTerraformable, ammoniaFM, ammoniaFD, ammoniaMEB, ammoniaALL);
    }
    let earthLikeWorldLIST = [];
    let earthLikeWorld = document.getElementById("earthLikeWorldID");
    if (earthLikeWorld) {
        let ammoniaDSS = document.getElementById("earthlikeworlds").checked.toString();
        let ammoniaTerraformable = document.getElementById("button6").checked.toString();
        let ammoniaFM = document.getElementById("button7").checked.toString();
        let ammoniaFD = document.getElementById("button8").checked.toString();
        let ammoniaMEB = document.getElementById("button9").checked.toString();
        let ammoniaALL = document.getElementById("button10").checked.toString();
        earthLikeWorldLIST.push(ammoniaDSS, ammoniaTerraformable, ammoniaFM, ammoniaFD, ammoniaMEB, ammoniaALL);
    }
    let waterWorldLIST = [];
    let waterWorld = document.getElementById("waterWorldID2");
    if (waterWorld) {
        let ammoniaDSS = document.getElementById("waterWorldsID").checked.toString();
        let ammoniaTerraformable = document.getElementById("button11").checked.toString();
        let ammoniaFM = document.getElementById("button12").checked.toString();
        let ammoniaFD = document.getElementById("button13").checked.toString();
        let ammoniaMEB = document.getElementById("button14").checked.toString();
        let ammoniaALL = document.getElementById("button15").checked.toString();
        waterWorldLIST.push(ammoniaDSS, ammoniaTerraformable, ammoniaFM, ammoniaFD, ammoniaMEB, ammoniaALL);
    }
    let hmcwLIST = [];
    let hmcw = document.getElementById("hmcwIDID");
    if (hmcw) {
        let ammoniaDSS = document.getElementById("hmcws").checked.toString();
        let ammoniaTerraformable = document.getElementById("button16").checked.toString();
        let ammoniaFM = document.getElementById("button17").checked.toString();
        let ammoniaFD = document.getElementById("button18").checked.toString();
        let ammoniaMEB = document.getElementById("button19").checked.toString();
        let ammoniaALL = document.getElementById("button20").checked.toString();
        hmcwLIST.push(ammoniaDSS, ammoniaTerraformable, ammoniaFM, ammoniaFD, ammoniaMEB, ammoniaALL);
    }
    let gasGiant1LIST = [];
    let gasGiant1 = document.getElementById("firstGasGiantID");
    if (gasGiant1) {
        let ammoniaDSS = document.getElementById("class1gasgiant").checked.toString();
        let ammoniaFM = document.getElementById("button22").checked.toString();
        let ammoniaFD = document.getElementById("button23").checked.toString();
        let ammoniaMEB = document.getElementById("button24").checked.toString();
        let ammoniaALL = document.getElementById("button25").checked.toString();
        gasGiant1LIST.push(ammoniaDSS, ammoniaFM, ammoniaFD, ammoniaMEB, ammoniaALL);
    }
    let gasGiant2LIST = [];
    let gasGiant2 = document.getElementById("SecondGasGiantID");
    if (gasGiant2) {
        let ammoniaDSS = document.getElementById("class2gasgiant").checked.toString();
        let ammoniaFM = document.getElementById("button26").checked.toString();
        let ammoniaFD = document.getElementById("button27").checked.toString();
        let ammoniaMEB = document.getElementById("button28").checked.toString();
        let ammoniaALL = document.getElementById("button29").checked.toString();
        gasGiant2LIST.push(ammoniaDSS, ammoniaFM, ammoniaFD, ammoniaMEB, ammoniaALL);
    }
    ;
    let gasGiant3LIST = [];
    let gasGiant3 = document.getElementById("ThirdGasGiantID");
    if (gasGiant3) {
        let ammoniaDSS = document.getElementById("class3gasgiant").checked.toString();
        let ammoniaFM = document.getElementById("button30").checked.toString();
        let ammoniaFD = document.getElementById("button31").checked.toString();
        let ammoniaMEB = document.getElementById("button32").checked.toString();
        let ammoniaALL = document.getElementById("button33").checked.toString();
        gasGiant3LIST.push(ammoniaDSS, ammoniaFM, ammoniaFD, ammoniaMEB, ammoniaALL);
    }
    ;
    let returnDict = {
        ammoniaData: ammoniaLIST,
        earthLikeWorldData: earthLikeWorldLIST,
        waterWorldData: waterWorldLIST,
        hmcwData: hmcwLIST,
        gasGiantOneData: gasGiant1LIST,
        gasGiantTwoData: gasGiant2LIST,
        gasGiantThreeData: gasGiant3LIST,
    };
    return returnDict;
}
function get_innerHTML() {
    let AmmoniaWorld_string = '';
    let AmmoniaWorld = document.getElementById('number_of_ammonia_worlds');
    let elw_string = '';
    let EarthLikeWorld = document.getElementById('number_of_elw');
    let waterWorld_string = '';
    let waterWorlds = document.getElementById('number_of_water-world');
    let hmcw_string = '';
    let hmcw = document.getElementById('number_of_hmcw');
    let gas_giant_one_string = '';
    let gas_giant_one = document.getElementById('number_of_class1gasgiant');
    let gas_giant_two_string = '';
    let gas_giant_two = document.getElementById('number_of_class2gasgiant');
    let gas_giant_three_string = '';
    let gas_giant_three = document.getElementById('number_of_class3gasgiant');
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
        `;
    }
    ;
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
        `;
    }
    ;
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
        `;
    }
    ;
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
        `;
    }
    ;
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
        `;
    }
    ;
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
        `;
    }
    ;
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
        `;
    }
    ;
    let returnDict = {
        ammoniaCheck: AmmoniaWorld.innerHTML,
        elwCheck: EarthLikeWorld.innerHTML,
        waterWorldCheck: waterWorlds.innerHTML,
        hmcwCheck: hmcw.innerHTML,
        gg1Check: gas_giant_one.innerHTML,
        gg2Check: gas_giant_two.innerHTML,
        gg3Check: gas_giant_three.innerHTML,
    };
    let all_together = `
        ${AmmoniaWorld_string}
        ${elw_string}
        ${waterWorld_string}
        ${hmcw_string}
        ${gas_giant_one_string}
        ${gas_giant_two_string}
        ${gas_giant_three_string}
    `;
    let openDetailsInnerHTML = `
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
    return [openDetailsInnerHTML, returnDict];
}
;
function closeOverlay() {
    let overlayID = document.getElementById("overlayID");
    document.body.removeChild(overlayID);
}
;
function openFinalHTML(total_credits) {
    let editPanel = document.getElementById("more_details_explorerID");
    editPanel.style.display = "none";
    let overlayID = document.getElementById("overlayID");
    let mainHTML = `
    <div class="final_credits_calculated">
        <h1>Your Total Credits Earned!</h1>
        <p>${total_credits} CR</p>


        <button onclick="closeOverlay()">Close</button>

    </div>
    `;
    overlayID.innerHTML = mainHTML;
}
function more_details() {
    return __awaiter(this, void 0, void 0, function* () {
        const overlay = document.createElement('div');
        overlay.id = 'overlayID';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = '#000000c2';
        let returnState = get_innerHTML();
        let get_innerHTML2 = returnState[0];
        let returnDictStr = JSON.stringify(returnState[1]);
        let mainHTML = `
    <div class="more_details_explorer" id="more_details_explorerID">
        ${get_innerHTML2}
    </div>
    `;
        overlay.innerHTML = mainHTML;
        document.body.appendChild(overlay);
        let enteredBodiesForm = document.getElementById("enteredBodiesForm");
        if (enteredBodiesForm) {
            enteredBodiesForm.addEventListener("submit", function (event) {
                return __awaiter(this, void 0, void 0, function* () {
                    event.preventDefault();
                    let furtherDetails = furtherDiscoveries();
                    furtherDetails = JSON.stringify(furtherDetails);
                    let totalCredits = yield sendDataToBackend(returnDictStr, furtherDetails);
                    openFinalHTML(totalCredits.total_credits);
                });
            });
        }
    });
}
function getting_backend_data(data) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
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
        console.log(data);
    });
}
function get_celestial_info(body_type, dss_id, terraformable, fm, fd, meb, ALL) {
    let n_earth_like_worlds = document.getElementById(body_type);
    let dss_elwBoolean = document.getElementById(dss_id);
    let terraformableBool = document.getElementById(terraformable);
    let first_mapped = document.getElementById(fm);
    let first_discovered = document.getElementById(fd);
    let mapped_with_efficiency = document.getElementById(meb);
    let all = document.getElementById(ALL);
    return [n_earth_like_worlds.value, dss_elwBoolean.checked, terraformableBool.checked, first_mapped.checked, first_discovered.checked, mapped_with_efficiency.checked, all.checked];
}
let formVar = document.getElementById("celestial_inputs_formID");
if (formVar) {
    formVar.addEventListener('submit', function (event) {
        event.preventDefault();
        let earthLikeWorldsData = get_celestial_info("earthLikeWorlds", "earthLikeWorlds-check", "button2", "button3", "button4", "button5", "button6");
        let AmmoniaWorldsData = get_celestial_info("AmmoniaWorlds", "bttn7", "bttn8", "bttn9", "bttn10", "bttn11", "bttn12");
        let water_world_data = get_celestial_info("waterworlds", "bttn13", "bttn14", "bttn15", "bttn16", "bttn17", "bttn18");
        let returnData = `${earthLikeWorldsData};${AmmoniaWorldsData};${water_world_data}`;
        getting_backend_data(returnData);
    });
}
;
function clear_inputs() {
}
let NAVBAR_DROPDOWN_CODE = true;
if (NAVBAR_DROPDOWN_CODE) {
    let exploreDropdown = document.getElementById('exploreDropdown');
    if (exploreDropdown) {
        const dropdownContainer = document.createElement('div');
        dropdownContainer.className = 'dropdownContainer';
        dropdownContainer.innerHTML = `
        <a href="#" class="dropdownClass">Systems</a>
        <a href="#" class="dropdownClass">New</a>
    
        `;
        exploreDropdown.addEventListener("mouseover", function (event) {
            exploreDropdown.appendChild(dropdownContainer);
            dropdownContainer.style.display = 'flex';
            dropdownContainer.style.flexDirection = 'column';
            dropdownContainer.style.left = '59%';
            dropdownContainer.style.transform = "translate(-50%)";
        });
        exploreDropdown.addEventListener("mouseout", function (event) {
            dropdownContainer.style.display = 'none';
        });
    }
}
