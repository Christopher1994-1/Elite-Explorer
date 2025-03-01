"use strict";
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
