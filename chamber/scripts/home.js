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

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=938969b1ed614c343ce9bd2085ccea32';


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

apiFetch();
// api fetch should require zero changes

// displayResults needs to have added the three day temperature forecast and it needs to be properly labeled.

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    // I was having trouble getting the icon to pop up and watched the tutorial video. Also, this will help explain the description weather[0], which confused me.
    // inside of the weather grouping, there is room for multiple conditions, so they added a number key system for that. So to get data that would work,
    // You have to grab from the correct weather grouping, which is 0. This doesn't make a whole lot of sense, but basically use console.log and look at the thing you
    // want in the console and it will give you the info you need to input to make it work.
    let desc = data.weather[0].description;

}


//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// this section is for the spotlight stuff needed.
// may need to add additional variables to be able to fulfill needed stuff.

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();

        // below was a test to see if json was actually grabbed.
    // console.log(data.members);
    displaySpotlight(data.members);
}

function displaySpotlight(members) {
    // need to add randomization for members silver and above to get spotlighted on webpage.
}