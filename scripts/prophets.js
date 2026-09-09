const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// The check your understanding box has the getProphetData function without an input command on it, ie something in the paratheses.
// If you wanted to make this more variable/versatile/whatever the correct terminology is, you would likely want to do that so you could
// reuse the function for a variety of .json files.

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    // I literally have no clue why they want you to put .prophets other then maybe they added an additional thing that will get called
    // Also, they want me to switch to using a function here which is why the console.table got commented out.
    displayProphets(data.prophets);

}

getProphetData();

const displayProphets = (prophets) => {
    // card building code will be inserted here.
    prophets.forEach((prophet) => {
        // actual card build code to be inserted here.
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");

        // the example given uses textContent, but I chose innerHTML because I thought that was how it worked. I will change it though.
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        

        cards.appendChild(card);
    });
}

