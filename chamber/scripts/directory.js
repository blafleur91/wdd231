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

const gridButton = document.querySelector('#grid-btn');
const listButton = document.querySelector('#list-btn');

// I asked chatGPT for help with the assignment because I was really struggling to figure out how to do a toggle that wouldn't
// just immediately break upon repressing a button. It gave the below .b-container suggestion. I am going to ask it how it works as I don't understand
// since when I tried it with the hashtag symbol it just didn't work.

// Ok, after asking it makes complete sense and I feel like a moron, but at the same time it was super helpful. So here is how I would word it.
// The reason to use the period is because, without thinking about javascript, I only gave it a css class. The ai knew that you can find classes in javascript,
// it used the class finder to identify the section needing changes done.
// Its reasoning for doing so was that because an Id is meant to find something specific, it is better to just use the class here because it is simply changing states.
const businessContainer = document.querySelector('.b-container');
const images = document.querySelectorAll('.b-card img')

gridButton.addEventListener('click', () => {
    businessContainer.classList.add('grid');
    businessContainer.classList.remove('list');
});

listButton.addEventListener('click', () => {
    businessContainer.classList.add('list');
    businessContainer.classList.remove('grid');
});

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();

        // below was a test to see if json was actually grabbed.
    // console.log(data.members);
    displayMembers(data.members);
}

getMembers();

function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("b-card");
        // What I am about to do is something I learned from ai. I double checked on a previous assignment I did this on
        // and it does the exact same thing as creating a variable for each element and then adding them onto the card element.
        // so I am going to do it this way as it just is more efficient and and immediately adds each element to the card element.
        
        card.innerHTML = `
        <h2>${member.name}</h2>
        <p class="tagline">${member.tagline}</p>
        <img src="${member.image}" alt="Image for ${member.name}" loading="lazy">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.url}</p>
        `;

        businessContainer.appendChild(card);
    });
}


// FOR FUTURE REFERENCE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// I was having to use chatgpt to get alot of this stuff working, and I did basically the majority of the non javascript work before I did Javascript.
// If I were to do this again, I would finish the Javascript before doing anything CSS related so that way I could not have struggled so much with the 
// CSS interactions with the Javascript, mainly by simply having two separate functions to create the two style's of lists.