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

const timestamp = document.querySelector("#timestamp")

timestamp.value = new Date().toLocaleDateString();


// ###########################################################################################################################################################

const benefitDisplay = document.querySelector('#membershipLevel');
const nonprofit = document.querySelector('#nonprofit');
const bronze = document.querySelector('#bronze');
const silver = document.querySelector('#silver');
const gold = document.querySelector('#gold');


function displayBenefitsNonprofit() {
    benefitDisplay.innerHTML = '';
    benefitDisplay.innerHTML = `
    <h3>Non-Profit Membership</h3>
    <button id="closeModal">X</button>
    <p><strong>Benefits include:</strong></p>
    <p class='bulleted'>Free Breakfast at Danny's Diner</p>
    <p class='bulleted'>Direct Communication with the Head of the Chamber</p>
    <p><strong>Cost:</strong> Free</p>
    `;

    benefitDisplay.showModal();

    //   this adds a close to the x button on the modal.
  closeModal.addEventListener("click", () => {
    benefitDisplay.close();
  });
}

function displayBenefitsBronze() {
    benefitDisplay.innerHTML = '';
    benefitDisplay.innerHTML = `
    <h3>Bronze Membership</h3>
    <button id="closeModal">X</button>
    <p><strong>Benefits include:</strong></p>
    <p class='bulleted'>Monthly Networking Opportunities</p>
    <p class='bulleted'>Discounts at Zranf Bakery</p>
    <p class='bulleted'>Access to Local Pastries Catering</p>
    <p><strong>Cost:</strong> $10 Annual</p>
    `;

    benefitDisplay.showModal();

    //   this adds a close to the x button on the modal.
  closeModal.addEventListener("click", () => {
    benefitDisplay.close();
  });
}

function displayBenefitsSilver() {
    benefitDisplay.innerHTML = '';
    benefitDisplay.innerHTML = `
    <h3>Silver Membership</h3>
    <button id="closeModal">X</button>
    <p><strong>Benefits include:</strong></p>
    <p class='bulleted'>Home Page Spotlight</p>
    <p class='bulleted'>Monthly Networking Opportunities</p>
    <p class='bulleted'>Discounts at Zranf Bakery</p>
    <p class='bulleted'>Access to Local Pastries Catering</p>
    <p><strong>Cost:</strong> $15 Annual</p>
    `;

    benefitDisplay.showModal();

    //   this adds a close to the x button on the modal.
  closeModal.addEventListener("click", () => {
    benefitDisplay.close();
  });
}

function displayBenefitsGold() {
    benefitDisplay.innerHTML = '';
    benefitDisplay.innerHTML = `
    <h3>Gold Membership</h3>
    <button id="closeModal">X</button>
    <p><strong>Benefits include:</strong></p>
    <p class='bulleted'>Home Page Spotlight</p>
    <p class='bulleted'>BiMonthly Networking Opportunities</p>
    <p class='bulleted'>Discount at Zranf Bakery</p>
    <p class='bulleted'>Chance to Host Giants of the Community Gala </p>
    <p class='bulleted'>Discounted Catering From Local Pastrie's</p>
    <p class='bulleted'>Direct Communication with the Head of the Chamber</p>
    <p><strong>Cost: $40 Annual</strong></p>
    `;

    benefitDisplay.showModal();

    //   this adds a close to the x button on the modal.
  closeModal.addEventListener("click", () => {
    benefitDisplay.close();
  });
}

nonprofit.addEventListener('click', () => {
    displayBenefitsNonprofit();
});

bronze.addEventListener('click', () => {
    displayBenefitsBronze();
});

silver.addEventListener('click', () => {
    displayBenefitsSilver();
});

gold.addEventListener('click', () => {
    displayBenefitsGold();
});