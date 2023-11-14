
var navbar = document.getElementById('navbar');
var map = document.getElementById('map');

window.addEventListener('scroll', function() {
   var navbarRect = navbar.getBoundingClientRect();
   var isNavbarFixed = window.getComputedStyle(navbar).position === "fixed";
   
   if (isNavbarFixed && navbarRect.top <= 0) {
      map.classList.add('transparent-map');
   } else {
      map.classList.remove('transparent-map');
   }
});

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds (adjust as needed)
}

showSlides(); // Call the function to start the slideshow


