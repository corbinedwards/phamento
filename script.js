const btnMenu = document.getElementsByClassName("button-phamento");
const navHome = document.getElementById("link-hero");
const navAbout = document.getElementById("link-about");
const navMenu = document.getElementById("link-menu");
const navContact = document.getElementById("link-contact");
const secHero = document.querySelector("#hero");
const secAbout = document.querySelector("#about");
const secMenu = document.querySelector("#menu");
const secContact = document.querySelector("#contact");

function scrollToTarget(elem, event) {
    const headerOffSet = document.getElementsByClassName('navbar')[0].clientHeight;
    let elementTop = elem.getBoundingClientRect().top;
    let offset = elementTop + window.scrollY - headerOffSet;

    event.preventDefault();

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
};

navHome.addEventListener("click", (e) => {scrollToTarget(secHero, e)});
navAbout.addEventListener('click', (e) => scrollToTarget(secAbout, e));
navMenu.addEventListener('click', (e) => scrollToTarget(secMenu, e));
navContact.addEventListener('click', (e) => scrollToTarget(secContact, e));
