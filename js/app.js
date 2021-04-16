/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const theSections = document.querySelectorAll("section");
const theMenu = document.getElementById("navbar__list");
const piece = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createTheNav(first, second) {
  return `<a class ='menu__link' data-id='${first}'>${second}</a>`;
}

function theSectionView(argu) {
  let position = argu.getBoundingClientRect();
  return position.top >= 0;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function theList() {
  for (let i = 0; i < theSections.length; i++) {
    nameOfSection = theSections[i].getAttribute("data-nav");
    linkOfSection = theSections[i].getAttribute("id");
    createList = document.createElement("li");
    createList.innerHTML = createTheNav(linkOfSection, nameOfSection);
    piece.appendChild(createList);
  }
  theMenu.appendChild(piece);
}

// Add class 'active' to section when near top of viewport
function toggleTheClass() {
  for (sect of theSections) {
    if (theSectionView(sect)) {
      if (!sect.classList.contains("your-active-class")) {
        sect.classList.add("your-active-class");
      }
    } else {
      // Remove class 'active' from section
      sect.classList.remove("your-active-class");
    }
  }
}

// Scroll to anchor ID using scrollTO event
function elementScrolling(theEve) {
  if (theEve.target.nodeName === "A") {
    linkOfSection = theEve.target.getAttribute("data-id");
    theSect = document.getElementById(linkOfSection);
    theSect.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */
document.addEventListener("scroll", function () {
  toggleTheClass();
});
theMenu.addEventListener("click", function (theEve) {
  elementScrolling(theEve);
});
// Build menu
theList();
