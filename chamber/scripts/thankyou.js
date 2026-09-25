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

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<h1>Thank You For Signing Up!</h1>
<p><strong>First Name:</strong> ${myInfo.get('fName')}</p>
<p><strong>Last Name:</strong> ${myInfo.get('lName')}</p>
<p><strong>Email:</strong> ${myInfo.get('email')}</p>
<p><strong>Mobile Number:</strong> ${myInfo.get('phone')}</p>
<p><strong>Business Name:</strong> ${myInfo.get('bName')}</p>
<p><strong>Submission Date:</strong> ${myInfo.get('timestamp')}</p>
`;