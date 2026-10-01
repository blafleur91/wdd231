const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

// Toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

// ###########################################################################################################################################################

import {places} from '.../data/places.mjs'
console.log(places);