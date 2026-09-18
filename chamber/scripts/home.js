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



// *****************************************************************************************************************************************

// this section is for needed weather stuff

// must change to correct latitude and longitude for syracuse utah

const wContainer = document.querySelector('.weather');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.09&lon=-112.06&units=imperial&appid=938969b1ed614c343ce9bd2085ccea32';
const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.09&lon=-112.06&units=imperial&appid=938969b1ed614c343ce9bd2085ccea32';


// api fetch should require zero changes.
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetchForecast() {
    try {
        const response = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
apiFetchForecast();
// api fetch should require zero changes

// displayResults needs to have added the three day temperature forecast and it needs to be properly labeled.

function displayResults(data) {
    let temp = Math.round(data.main.temp); 
    currentTemp.innerHTML = `${temp}&deg;F`;
    

    // I was having trouble getting the icon to pop up and watched the tutorial video. Also, this will help explain the description weather[0], which confused me.
    // inside of the weather grouping, there is room for multiple conditions, so they added a number key system for that. So to get data that would work,
    // You have to grab from the correct weather grouping, which is 0. This doesn't make a whole lot of sense, but basically use console.log and look at the thing you
    // want in the console and it will give you the info you need to input to make it work.
    let desc = data.weather[0].description;
    weatherDesc.innerHTML = `${desc}`;

}

function displayForecast(data) {
    const forecastContainer = document.createElement('div');
    forecastContainer.classList.add('forecast')

    const day1 = data.list[8];
    const day2 = data.list[16];
    const day3 = data.list[24];

    const date1 = new Date(day1.dt_txt);
    const date2 = new Date(day2.dt_txt);
    const date3 = new Date(day3.dt_txt);

    forecastContainer.innerHTML = `
        <h3>Three Day Forecast</h3>
        <p>${date1.toLocaleDateString('en-US', { weekday: "long"})}: ${Math.round(day1.main.temp)}&deg;F</p>
        <p>${date2.toLocaleDateString('en-US', { weekday: "long"})}: ${Math.round(day2.main.temp)}&deg;F</p>
        <p>${date3.toLocaleDateString('en-US', { weekday: "long"})}: ${Math.round(day3.main.temp)}&deg;F</p>
    `;

    wContainer.appendChild(forecastContainer);
}


//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// this section is for the spotlight stuff needed.
// may need to add additional variables to be able to fulfill needed stuff.

const spotlightContainer = document.querySelector('.spotlight');

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();

        // below was a test to see if json was actually grabbed.
    // console.log(data.members);
    filterSpotlight(data.members);
}

function filterSpotlight(members) {
    const filtered = members.filter(member => member.membershiplevel === 'Silver' || member.membershiplevel === "Gold");
    // console.log(filtered);
    displaySpotlight(filtered);
}

function displaySpotlight(members) {
    // need to add randomization for members silver and above to get spotlighted on webpage.
    // below is the way to get a random index for javascript

    // Below is how you would create a double randomizer. You would create a random number between 2 and 3, and then pull from a randomized members list to get no repeats.
    // ######################################################################################################
    // const shuffled = [...members].sort(() => Math.random() - 0.5);
    // const numberOfSpotlights = Math.floor(Math.random() * 2) + 2;
    // const selected = shuffled.slice(0, numberOfSpotlights)
    // console.log(selected);
    // ###########################################################################################################

    const shuffled = [...members].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 2);
    // console.log(selected);

    selected.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("b-card");
        // What I am about to do is something I learned from ai. I double checked on a previous assignment I did this on
        // and it does the exact same thing as creating a variable for each element and then adding them onto the card element.
        // so I am going to do it this way as it just is more efficient and and immediately adds each element to the card element.
        
        card.innerHTML = `
        <h3>${member.name}</h3>
        <p class='tagline'><strong>Membership Level:</strong> ${member.membershiplevel}</p>
        <img src="${member.image}" alt="Image for ${member.name}" loading="lazy">
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> ${member.url}</p>
        
        `;

        spotlightContainer.appendChild(card);
    });

}

getMembers();