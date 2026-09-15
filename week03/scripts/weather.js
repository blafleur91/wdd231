const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=938969b1ed614c343ce9bd2085ccea32';


// for the below function, I had to basically skip the instructions and go straight to the check your understanding because I
// didn't know what to do. It is frustrating that last week they taught this concept but didn't have us use it so I don't really understand
// what it was I was supposed to do. I understand the principle of it being a catch for errors and stuff, I just never would've
// been able to type it out without help.
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

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    // I was having trouble getting the icon to pop up and watched the tutorial video. Also, this will help explain the description weather[0], which confused me.
    // inside of the weather grouping, there is room for multiple conditions, so they added a number key system for that. So to get data that would work,
    // You have to grab from the correct weather grouping, which is 0. This doesn't make a whole lot of sense, but basically use console.log and look at the thing you
    // want in the console and it will give you the info you need to input to make it work.
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}