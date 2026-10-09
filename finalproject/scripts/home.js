import './navigation.mjs';


async function getData() {
    try {
        const response = await fetch("data/sets.json");
        if (response.ok){
            const data = await response.json();

            const shuffledSets = [...data.sets];

            shuffledSets.sort(() => Math.random() - 0.5);

            const shuffledData = shuffledSets.slice(0, 2);

            makeCards(shuffledData);
        } else {
            throw Error(await response.text());
        }
        
    } catch (error) {
        console.error(error);
    }
}

getData();

const container = document.querySelector('#card-container');
const setInfo = document.querySelector('#setModal');

function makeCards(data) {

    // PAY ATTENTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // because I am now pulling directly from an array, the .sets needed to be removed.



    // also, type forEach not foreach!!!!

    data.forEach(set => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.addEventListener('click', () => {
            setInfo.innerHTML = '';
            setInfo.innerHTML = `
            <h2>${set.name}</h2>
            <button id="closeModal">X</button>
            <div class="modal-details">
            <img src="images/${set.boxArt}" alt="Box Art for ${set.name}" loading="lazy">
            <div>
            <p><strong>Set Number:</strong> ${set.setNumber}</p>
            <p class='year'><strong>Year Released:</strong> ${set.releaseYear}</p>
            <p class='count'><strong>Piece Count:</strong> ${set.pieceCount}</p>
            <p class='o-price'><strong>Original Price:</strong> $${set.originalPrice}</p>
            <p><strong>Inflation Adjusted Price:</strong> $${set.inflationAdjustedPrice}</p>
            </div>
            </div>
            <p><strong>Description:</strong> ${set.description}</p>
            `;
            setInfo.showModal();

            const closeModal = document.querySelector('#closeModal')

            closeModal.addEventListener("click", () => {
                setInfo.close();
            });
        });

        card.innerHTML = `
        <h2>${set.name}</h2>
        <img src="images/${set.boxArt}" alt="Box Art for ${set.name}" loading="lazy">
        <p class='year'><strong>Year Released:</strong> ${set.releaseYear}</p>
        <p class='count'><strong>Piece Count:</strong> ${set.pieceCount}</p>
        <p class='o-price'><strong>Original Price:</strong> $${set.originalPrice}</p>
        `;

        container.appendChild(card);
    });
}

const welcome = document.querySelector('#welcome');
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();
// equation that give you milliseconds in a day. 1000 * 60 * 60 *24
const oneDay = 86400000;

if (!lastVisit) {
    welcome.innerText = "Welcome! This page is the Home to the Star Wars Database.";
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