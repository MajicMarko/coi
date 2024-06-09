document.addEventListener("DOMContentLoaded", () => {
  const initializeSwiper = () => {
    return new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChangeTransitionEnd: function () {
          console.log("Active slide index:", this.realIndex);
        },
      },
      breakpoints: {
        375: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  };

  let swiper = initializeSwiper();

  const toggleButton = document.getElementById("toggle-swiper");
  let swiperInitialized = true;

  toggleButton.addEventListener("click", () => {
    if (swiperInitialized) {
      swiper.realIndex = 0;
      swiper.destroy(true, false);
      swiperInitialized = false;
    } else {
      swiper = initializeSwiper();
      swiperInitialized = true;
    }
  });
});
