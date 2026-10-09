import './navigation.mjs';

async function getData() {
    try {
        const response = await fetch("data/sets.json");
        if (response.ok){
            const data = await response.json();

            const sortedData = data.sets.sort((a, b) => a.releaseYear - b.releaseYear);

            makeCards(sortedData);
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
    // for the json file, it has a selector for sets, which then contains the array of items. I was doing data.forEach, which was failing to load anything
    // because it was trying to pull from an array when there was no array, just a data pairing.

    // also, type forEach not foreach!!!!

    // ALSO TO NOTE
    // Because I wanted to sort it by release year, I had to remove the .sets since it became purely an array.

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