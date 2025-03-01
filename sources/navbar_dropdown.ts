//. TYPESCRIPT FOR HANDLING NAVBAR DROPDOWN

let NAVBAR_DROPDOWN_CODE: boolean = true;




if (NAVBAR_DROPDOWN_CODE) {

    //. EXPLORE DROPDOWN ELEMENT
    let exploreDropdown: any = document.getElementById('exploreDropdown')


    if (exploreDropdown) {

        const dropdownContainer = document.createElement('div');
        dropdownContainer.className = 'dropdownContainer';
    
        dropdownContainer.innerHTML = `
        <a href="#" class="dropdownClass">Systems</a>
        <a href="#" class="dropdownClass">New</a>
    
        `
        exploreDropdown.addEventListener("mouseover", function(event:any) {
    
            exploreDropdown.appendChild(dropdownContainer);
    
            dropdownContainer.style.display = 'flex';
            dropdownContainer.style.flexDirection = 'column';
            dropdownContainer.style.left = '59%';
            dropdownContainer.style.transform = "translate(-50%)";
    
        });
    
        //. want to make sure when the dropdown is hovered off it goes away, 
        exploreDropdown.addEventListener("mouseout", function(event:any) {
            dropdownContainer.style.display = 'none';
        })
    }
    

}








//| END OF NAVBAR DROPDOWN