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

import {places} from '../data/places.mjs'
// console.log(places);

const container = document.querySelector('#discover');

function displayItems(places) {
    places.forEach(place => {
        // creates initial card element
        const card = document.createElement('div');
        card.classList.add('d-card');
        // creates the img for the card element
        const photo = document.createElement('img');
        photo.src = `images/${place.photo_url}`;
        photo.alt = place.name;
        card.appendChild(photo);
        // creates the title element
        const title = document.createElement('h2');
        title.innerText = place.name;
        card.appendChild(title);
        // create address
        const address = document.createElement('address');
        address.innerText = place.address;
        card.appendChild(address);
        // create description
        const desc = document.createElement('p');
        desc.innerText = place.description;
        card.appendChild(desc);

        container.appendChild(card);
    });
}

displayItems(places);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// this is a section for the local storage and trying to get that working

const welcome = document.querySelector('#welcome');
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();
// equation that give you milliseconds in a day. 1000 * 60 * 60 *24
const oneDay = 86400000;

if (!lastVisit) {
    welcome.innerText = "Welcome! This page contains 8 fantastic sites in Syracuse for you to visit.";
} else {
    
    const timeDif = currentVisit - lastVisit;

    if (timeDif < oneDay) {
        welcome.innerText = "We are glad to see you back so soon!";
    } else {

        const days = Math.floor(timeDif / oneDay);
        if (days === 1) {
            welcome.innerText = `You last visited this site 1 day ago.`;
        } else {
            welcome.innerText = `You last visited this site ${days} days ago`;
        }
        
    }
}

localStorage.setItem('lastVisit', Date.now());