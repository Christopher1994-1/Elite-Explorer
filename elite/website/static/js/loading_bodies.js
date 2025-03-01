"use strict";
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
function get_innerHTML() {
    let AmmoniaWorld_string = '';
    let AmmoniaWorld = document.getElementById('number_of_ammonia_worlds');
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
        `;
    }
    let openDetailsInnerHTML = `
    <h1>Enter in more details about your discoveries!</h1>
    <hr>

    <div class="more_details_sections">

        <div class="enteredBody">
            ${AmmoniaWorld_string}
        </div>

    </div>

    `;
    return openDetailsInnerHTML;
}
;
function more_details() {
    const more_details_explorer = document.createElement('div');
    more_details_explorer.style.position = 'fixed';
    more_details_explorer.style.top = '7%';
    more_details_explorer.style.left = '50%';
    more_details_explorer.style.transform = 'translate(-50%, -50%)';
    more_details_explorer.className = 'more_details_explorer';
    more_details_explorer.innerHTML = get_innerHTML();
    document.body.appendChild(more_details_explorer);
}
