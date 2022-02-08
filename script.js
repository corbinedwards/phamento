const btnsMenu = document.getElementsByClassName("button");
const navSectionLinks = document.querySelectorAll("#link-hero,#link-about,#link-menu,#link-contact");
const sections = document.querySelectorAll("#hero,#about,#menu,#contact");

const headerOffSet = document.getElementsByClassName('navbar')[0].clientHeight;
const smallSectionThreshold = 350; // defines a scroll point a little before small sections
const smallSectionIds = ["contact"];

function currentLanguage(lang) {
    if(lang !== 'eng' && lang !== 'ger') {
        console.log('ERROR: Unsupported language cookie');
        return 'eng';
    }

    console.log(document.cookie.split('; ').some((item) => item.trim().startsWith('language=')));
}

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

// LANGUAGE REPLACEMENTS (I'm sorry you have to see this much code)
let languageSwitch = [
    {
    id: "link-hero",
    eng: "HOME",
    ger: "HEIMAT"
    },
    {
    id: "link-about",
    eng: "ABOUT",
    ger: "ETWA"
    },
    {
    id: "link-menu",
    eng: "MENU",
    ger: "GETRÄNKE"
    },
    {
    id: "link-contact",
    eng: "CONTACT",
    ger: "KONTAKT"
    },
    {
    id: "button-nav-menu",
    eng: "Menu",
    ger: "Getränke"
    },
    {
    id: "navbarDropdown",
    eng: "ENG",
    ger: "GER"
    },
    {
    id: "language2",
    eng: "GER",
    ger: "ENG"
    },
    {
    id: "eng",
    eng: "ENG",
    ger: "ENG"
    },
    {
    id: "ger",
    eng: "GER",
    ger: "GER"
    },
    {
    id: "hero-header-main",
    eng: "Good Ass Bubble Tea",
    ger: "Guter Bubble-Tee"
    },
    {
    id: "hero-header-sub",
    eng: "This Bubble Tea is really good.",
    ger: "Dieser Bubble-Tee ist wirklich gut."
    },
    {
    id: "hero-header-sub-2",
    eng: "No seriously. Try it.",
    ger: "Nein im Ernst. Versuch es."
    },
    {
    id: "button-hero",
    eng: "Menu",
    ger: "Getränke"
    },
    {
    id: "about-header",
    eng: "ABOUT",
    ger: "ETWA"
    },
    {
    id: "about-content-text",
    eng: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ger: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    id: "menu-header-drinks",
    eng: "DRINKS",
    ger: "GETRÄNKE"
    },
    {
    id: "drinks-milktea",
    eng: "Milk Tea",
    ger: "Milchtee"
    },
    {
    id: "milktea-1",
    eng: "Black",
    ger: "Schwarz"
    },
    {
    id: "milktea-2",
    eng: "Green",
    ger: "Grün"
    },
    {
    id: "milktea-3",
    eng: "Caramel",
    ger: "Karamell"
    },
    {
    id: "drinks-fruittea",
    eng: "Flavored Tea",
    ger: "Frutchtetee"
    },
    {
    id: "fruittea-1",
    eng: "Watermelon",
    ger: "Wassermelone"
    },
    {
    id: "fruittea-2",
    eng: "Lemon",
    ger: "Zitrone"
    },
    {
    id: "fruittea-3",
    eng: "Mango",
    ger: "Mango"
    },
    {
    id: "fruittea-4",
    eng: "Honeydew",
    ger: "Honigmelone"
    },
    {
    id: "fruittea-5",
    eng: "Lychee",
    ger: "Litschi"
    },
    {
    id: "fruittea-6",
    eng: "Peach",
    ger: "Pfirsich"
    },
    {
    id: "fruittea-7",
    eng: "Passion Fruit",
    ger: "Maracuja"
    },
    {
    id: "fruittea-8",
    eng: "Guava",
    ger: "Guave"
    },
    {
    id: "fruittea-9",
    eng: "Apple",
    ger: "Apfel"
    },
    {
    id: "fruittea-10",
    eng: "Strawberry",
    ger: "Erdbeer"
    },
    {
    id: "fruittea-11",
    eng: "Raspberry",
    ger: "Himbeer"
    },
    {
    id: "fruittea-12",
    eng: "Kiwi",
    ger: "Kiwi"
    },
    {
    id: "fruittea-13",
    eng: "Pineapple",
    ger: "Ananas"
    },
    {
    id: "drinks-latte",
    eng: "Latte",
    ger: "Latte"
    },
    {
    id: "latte-1",
    eng: "Matcha",
    ger: "Matcha"
    },
    {
    id: "latte-2",
    eng: "Taro",
    ger: "Taro"
    },
    {
    id: "latte-3",
    eng: "Coconut",
    ger: "Kokos"
    },
    {
    id: "latte-4",
    eng: "Chocolate",
    ger: "Schokolade"
    },
    {
    id: "latte-5",
    eng: "Vanilla",
    ger: "Vanille"
    },
    {
    id: "latte-6",
    eng: "Brown Sugar",
    ger: "Brauner Zucker"
    },
    {
    id: "latte-7",
    eng: "Espresso",
    ger: "Espresso"
    },
    {
    id: "drinks-specials",
    eng: "Specials",
    ger: "Spezialitaten"
    },
    {
    id: "specials-1",
    eng: "Seasalt Cheese",
    ger: "Seasalt Cheese"
    },
    {
    id: "specials-2",
    eng: "Brown Sugar Bubble Latte",
    ger: "Brown Sugar Bubble Latte"
    },
    {
    id: "menu-header-toppings",
    eng: "EXTRA TOPPINGS",
    ger: "EXTRA TOPPING"
    },
    {
    id: "toppings-klassik",
    eng: "Classic",
    ger: "Klassik"
    },
    {
    id: "topping-classic-1",
    eng: "Tapioca",
    ger: "Tapioka"
    },
    {
    id: "toppings-jelly",
    eng: "Jelly",
    ger: "Jelly"
    },
    {
    id: "topping-jelly-1",
    eng: "Coconut",
    ger: "Kokos"
    },
    {
    id: "topping-jelly-2",
    eng: "Rainbow",
    ger: "Regenbogen"
    },
    {
    id: "topping-jelly-3",
    eng: "Aloe Vera",
    ger: "Aloe Vera"
    },
    {
    id: "toppings-boba",
    eng: "Boba",
    ger: "Boba"
    },
    {
    id: "topping-boba-1",
    eng: "Lychee",
    ger: "Litschi"
    },
    {
    id: "topping-boba-2",
    eng: "Passion Fruit",
    ger: "Maracuja"
    },
    {
    id: "topping-boba-3",
    eng: "Yogurt",
    ger: "Joghurt"
    },
    {
    id: "topping-boba-4",
    eng: "Mango",
    ger: "Mango"
    },
    {
    id: "topping-boba-5",
    eng: "Strawberry",
    ger: "Erdbeer"
    },
    {
    id: "topping-boba-6",
    eng: "Peach",
    ger: "Pfirsich"
    },
    {
    id: "topping-boba-7",
    eng: "Apple",
    ger: "Apfel"
    },
    {
    id: "menu-header-coffee",
    eng: "COFFEE",
    ger: "KAFFEE"
    },
    {
    id: "coffee-vietnam",
    eng: "Made in Vietnam",
    ger: "Hergestellt in Vietnam"
    },
    {
    id: "coffee-vietnam-1",
    eng: "Traditional Vietnamese Coffee Style",
    ger: "Vietnamesischer Kaffee Traditioneller Art"
    },
    {
    id: "coffee-italy",
    eng: "Made in Italy",
    ger: "Hergestellt in Italien"
    },
    {
    id: "coffee-italy-1",
    eng: "Espresso",
    ger: "Espresso"
    },
    {
    id: "coffee-italy-2",
    eng: "Double Espresso",
    ger: "Espresso Doppelt"
    },
    {
    id: "coffee-italy-3",
    eng: "Coffee S",
    ger: "Kaffee S"
    },
    {
    id: "coffee-italy-4",
    eng: "Coffee M",
    ger: "Kaffee M"
    },
    {
    id: "coffee-italy-5",
    eng: "Cappuccino",
    ger: "Cappuccino"
    },
    {
    id: "coffee-italy-6",
    eng: "Latte Macchiato",
    ger: "Latte Macchiato"
    },
    {
    id: "coffee-latte",
    eng: "Hot Latte",
    ger: "Heißer Latte"
    },
    {
    id: "coffee-latte-1",
    eng: "Chocolate",
    ger: "Schokolade"
    },
    {
    id: "coffee-latte-2",
    eng: "Vanilla",
    ger: "Vanille"
    },
    {
    id: "coffee-latte-3",
    eng: "Caramel",
    ger: "Karamell"
    },
    {
    id: "coffee-latte-4",
    eng: "Coconut",
    ger: "Kokos"
    },
    {
    id: "coffee-latte-5",
    eng: "Matcha",
    ger: "Matcha"
    },
    {
    id: "coffee-latte-6",
    eng: "Taro",
    ger: "Taro"
    },
    {
    id: "coffee-biotee",
    eng: "Organic Tea",
    ger: "Bio Tee"
    },
    {
    id: "coffee-biotee-chai",
    eng: "Chai Tea:",
    ger: "Chai Tee:"
    },
    {
    id: "coffee-biotee-roobios",
    eng: "Rooibos Tea:",
    ger: "Rooibos Tee:"
    },
    {
    id: "coffee-biotee-black",
    eng: "Black Tea:",
    ger: "Schwarzer Tee:"
    },
    {
    id: "coffee-biotee-green",
    eng: "Green Tea:",
    ger: "Grüner Tee:"
    },
    {
    id: "coffee-biotee-herb",
    eng: "Herb Tea:",
    ger: "Kräutertee Tee:"
    },
    {
    id: "coffee-biotee-1",
    eng: "Cinnamon Ginger",
    ger: "Zimt Ingwer"
    },
    {
    id: "coffee-biotee-2",
    eng: "Bourbon Vanilla",
    ger: "Bourbon Vanille"
    },
    {
    id: "coffee-biotee-3",
    eng: "Earl Grey",
    ger: "Graf Grey"
    },
    {
    id: "coffee-biotee-4",
    eng: "Criss Cross",
    ger: "Criss Cross"
    },
    {
    id: "coffee-biotee-5",
    eng: "Chamomile | Peppermint",
    ger: "Kamille | Pfefferminze"
    },
    {
    id: "contact-header-hours",
    eng: "HOURS",
    ger: "STD"
    },
    {
    id: "monday",
    eng: "Monday:",
    ger: "Montag:"
    },
    {
    id: "tuesday",
    eng: "Tuesday:",
    ger: "Dienstag:"
    },
    {
    id: "wednesday",
    eng: "Wednesday:",
    ger: "Mittwoch:"
    },
    {
    id: "thursday",
    eng: "Thursday:",
    ger: "Donnerstag:"
    },
    {
    id: "friday",
    eng: "Friday:",
    ger: "Freitag:"
    },
    {
    id: "saturday",
    eng: "Saturday:",
    ger: "Samstag:"
    },
    {
    id: "sunday",
    eng: "Sunday:",
    ger: "Sonntag:"
    },
    {
    id: "closed",
    eng: "Closed",
    ger: "Abgeschlossen"
    },
    {
    id: "contact-header-location",
    eng: "LOCATION",
    ger: "LAGE"
    },
    {
    id: "footer-content-1",
    eng: "©2022 Phamento LLC.",
    ger: "©2022 Phamento LLC."
    },
    {
    id: "footer-content-2",
    eng: "Website created by Corbin Edwards",
    ger: "Webseite erstellt von Corbin Edwards"
    }
]

function changeLanguage(lang) {
    let elementIDs = languageSwitch.map(l => "#" + l.id);
    let textElements = document.querySelectorAll(elementIDs.toString());

    textElements.forEach((elem) => {
        let languageElement = languageSwitch.find(l => l.id === elem.id)

        if(languageElement) {
            let elementText = (lang == "eng") ? languageElement.eng : languageElement.ger;
            elem.textContent = elementText;
        }
    });
}

// language cookie
// if(!document.cookie.split('; ').find(c => c.startsWith('language'))) {
//     document.cookie += 'language=ger; '
// }
// else {
//     console.log('cookie exists??')
// };

// nav scrolling
document.addEventListener('scroll', () => updateNavActive());

for (let i = 0; i < navSectionLinks.length; i++) {
    navSectionLinks[i].addEventListener('click', (e) => scrollToTarget(sections[i], e));
}

for (let i = 0; i < btnsMenu.length; i++) {
    btnsMenu[i].addEventListener('click', (e) => scrollToTarget(Array.from(sections).find((s) => s.id == "menu"), e));
}

// set language
changeLanguage("ger");

document.cookie = "language=ger;max-age=60*60*24*365;samesite=lax;"
console.log(document.cookie);
