// Menu options

// Selector en JS para una sola cosa
const menuOpenButton = document.querySelector("#menu-open-button");

const menuCloseButton = document.querySelector("#menu-close-button");

// Selector en JS cuando se quiere seleccionar todo lo de una cosa
const navLinks = document.querySelectorAll(".nav-menu .nav-link")

// Toggle mobile menu visibility with close button
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});

// Toggle mobile menu visibility with open button
menuCloseButton.addEventListener("click", () => 
    menuOpenButton.click() /*Trigerea que se acitve el open button click listener, entnoces encoje el menu*/
);

// Toggle mobile menu when clicking any of the nav link options
navLinks.forEach(link => {
  link.addEventListener("click", () => 
    menuOpenButton.click());
})

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