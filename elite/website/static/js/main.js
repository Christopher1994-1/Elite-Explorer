"use strict";
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
        getting_backend_data(earthLikeWorldsData);
    });
}
;
function clear_inputs() {
}
