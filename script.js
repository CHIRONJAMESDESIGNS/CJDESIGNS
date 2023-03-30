/* JavaScript to rotate slides */
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

setInterval(function() {
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.transition = "opacity 1s ease-in-out"; // Add transition
  }
  
  // Show the next slide
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.opacity = 1;
}, 5000); // Change slides every 5 seconds
