document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper", {
      autoHeight: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 500,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      loop: false,
      effect: "slide",
      spaceBetween: 30,
      on: {
        init: function () {
          var paginationSwitches = document.querySelectorAll(".swiper-pagination-custom .swiper-pagination-switch");
          paginationSwitches.forEach(function (switchElement, index) {
            switchElement.classList.remove("active");
            if (index === 0) {
              switchElement.classList.add("active");
            }
          });
        },
        slideChangeTransitionStart: function () {
          var paginationSwitches = document.querySelectorAll(".swiper-pagination-custom .swiper-pagination-switch");
          paginationSwitches.forEach(function (switchElement) {
            switchElement.classList.remove("active");
          });
          paginationSwitches[mySwiper.realIndex].classList.add("active");
        },
      },
    });
  
    var paginationSwitches = document.querySelectorAll(".swiper-pagination-custom .swiper-pagination-switch");
    paginationSwitches.forEach(function (switchElement, index) {
      switchElement.addEventListener("click", function () {
        mySwiper.slideTo(index);
        paginationSwitches.forEach(function (switchElement) {
          switchElement.classList.remove("active");
        });
        switchElement.classList.add("active");
      });
    });
  });
  