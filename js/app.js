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
const theSections = Array.from(document.querySelectorAll("section"));
const theMenu = document.getElementById("navbar__list");
let listItems = theSections.length;

/**
 * End Global Variables

 * Start Helper Functions
 *
 */
function theList() {
  for (sect of theSections) {
    nameOfSection = sect.getAttribute("data-nav");
    linkOfSection = sect.getAttribute("id");
    createList = document.createElement("li");
    createList.innerHTML = `<a class='menu__link' href='#${linkOfSection}'>${nameOfSection}</a>`;
    theMenu.appendChild(createList);
  }
}

function theSectionView(argu) {
  let position = argu.getBoundingClientRect();
  return position.top >= 0;
}

function toggleTheClass() {
  for (sect of theSections) {
    if (theSectionView(sect)) {
      if (!sect.classList.contains("your-active-class")) {
        sect.classList.add("your-active-class");
      }
    } else {
      sect.classList.remove("your-active-class");
    }
  }
}
/**
 * End Helper Functions
 */

// build the nav
theList();

// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", toggleTheClass);

/**
 * End Main Functions
 */
