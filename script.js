const btnsMenu = document.getElementsByClassName("button");
const navSectionLinks = document.querySelectorAll("#link-hero,#link-about,#link-menu,#link-contact");
const sections = document.querySelectorAll("#hero,#about,#menu,#contact");

const headerOffSet = document.getElementsByClassName('navbar')[0].clientHeight;
const smallSectionThreshold = 350; // defines a scroll point a little before small sections
const smallSectionIds = ["contact"];

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

document.addEventListener('scroll', () => updateNavActive());

for (let i = 0; i < navSectionLinks.length; i++) {
    navSectionLinks[i].addEventListener('click', (e) => scrollToTarget(sections[i], e));
}

for (let i = 0; i < btnsMenu.length; i++) {
    btnsMenu[i].addEventListener('click', (e) => scrollToTarget(Array.from(sections).find((s) => s.id == "menu"), e));
}
