const btnsMenu = document.getElementsByClassName("button");
const navSectionLinks = document.querySelectorAll("#link-hero,#link-about,#link-menu,#link-contact");
const sections = document.querySelectorAll("#hero,#about,#menu,#contact");

const headerOffSet = document.getElementsByClassName('navbar')[0].clientHeight;
const smallSectionThreshold = 350; // defines a scroll point a little before small sections
const smallSectionIds = ["contact"];

var languageJSON;

async function loadLanguageText() {
    const res = await fetch("/language");
    return res.json();
};

function currentLanguage() {
    if(!document.cookie) {
        document.cookie = "language=ger;max-age=60*60*24*365;samesite=lax;";
        return "ger";
    }
    else
       return document.cookie.split(';').find(c => c.startsWith('language')).split('=')[1];
};

// setLanguage(): sets site text to German ('ger') or English ('eng')
function setLanguage(lang) {
    lang = lang.toLowerCase();

    if(lang !== 'ger' && lang !== 'eng') {
        console.log(`Invalid language parameter: '${lang}'. Switching to German.`);
        lang = 'ger';
    }

    let elementIDs = languageJSON.map(l => '#' + l.id);
    let textElements = document.querySelectorAll(elementIDs.toString());

    textElements.forEach((elem) => {
        let languageElement = languageJSON.find(l => l.id === elem.id)

        if(languageElement) {
            let elementText = (lang == 'ger') ? languageElement.ger : languageElement.eng;
            elem.textContent = elementText;
        }
    });

    document.cookie = `language=${lang};max-age=60*60*24*365;samesite=lax;`;
};

function switchLanguage() {
    (currentLanguage() === 'ger') ? setLanguage('eng') : setLanguage('ger');
};

// scrollToTarget(): offsets navigation scrolling from fixed navbar height
function scrollToTarget(elem, event) {
    let elementTop = elem.getBoundingClientRect().top;
    let offset = elementTop + window.scrollY - headerOffSet;

    event.preventDefault();

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
};

function getCurrentSection() {
    // loop from last to first in order to catch smaller sections first
    for(let i = sections.length - 1; i > -1; i--) {
        if(isScrollInSection(sections[i])) return i;
    }
    return -1;
};

function isScrollInSection(section) {
    let scrollInSection = false;
    let sectionTop = section.getBoundingClientRect().top;
    let sectionBottom = section.getBoundingClientRect().bottom;

    // true if scroll pos. is in first section
    scrollInSection = (section === sections[0] && window.scrollY < sections[0].clientHeight - headerOffSet); 
    // true if scroll pos. is in last section's threshold
    scrollInSection = scrollInSection || (smallSectionIds.includes(section.id) && sectionTop - headerOffSet <= smallSectionThreshold);
    // true if scroll pos. is between top and bottom part of section
    scrollInSection = scrollInSection || (sectionTop <= headerOffSet && sectionBottom > headerOffSet)

    return scrollInSection;
};

function updateNavActive() {
    let sectionIndex = getCurrentSection();
    navSectionLinks.forEach((link) => link.classList.remove("nav-link-active"));
    if(sectionIndex > -1) navSectionLinks[sectionIndex].classList.add("nav-link-active");
};

document.addEventListener('DOMContentLoaded', async () => {
    languageJSON = await loadLanguageText();
    
    // nav scrolling
    document.addEventListener('scroll', () => updateNavActive());

    // nav link indexes are mapped to section indexes
    for (let i = 0; i < navSectionLinks.length; i++) {
        navSectionLinks[i].addEventListener('click', (e) => scrollToTarget(sections[i], e));
    }

    // make menu buttons scroll to menu section
    for (let i = 0; i < btnsMenu.length; i++) {
        btnsMenu[i].addEventListener('click', (e) => scrollToTarget(Array.from(sections).find((s) => s.id == 'menu'), e));
    }

    // set site language
    setLanguage(currentLanguage());
    document.getElementById('language2').addEventListener('click', () => switchLanguage());
    document.getElementById('eng').addEventListener('click', () => {if(currentLanguage() !== 'eng') switchLanguage()});
    document.getElementById('ger').addEventListener('click', () => {if(currentLanguage() !== 'ger') switchLanguage()});
});
