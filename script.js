// Menu options
const menuOpenButton = document.querySelector("#menu-open-button");

const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
});

menuCloseButton.addEventListener("click", () => 
    menuOpenButton.click() /*Trigerea que se acitve el open button click listener, entnoces encoje el menu*/
);

// Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    
    spaceBetween: 10,

    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    //   Activates the buttons at the bottom
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });