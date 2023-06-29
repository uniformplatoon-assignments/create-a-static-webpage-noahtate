//program carousel to change slides automatically

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigation");

// Get the offset position of the navbar
var sticky = 60; // navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
    content
  } else {
    navbar.classList.remove("sticky");
  }
}


const imageContainer = document.getElementById("productmockup");
const paraContainer = document.getElementById("description");
const slideButton = document.getElementById('slideButton');


function slideImage() {
  imageContainer.classList.toggle('notslide');
  paraContainer.classList.toggle('notnotslide');
}

// Trigger the slide effect after a delay (e.g., 3 seconds)
setTimeout(slideImage, 3000);
slideButton.addEventListener('click', slideImage);


