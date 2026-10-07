const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar')

// Toggle the show class off and on
if (navbutton && navlinks) {
    navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
    });
}