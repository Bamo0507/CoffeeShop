const menuOpenButton = document.querySelector("#menu-open-button");

const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
});

menuCloseButton.addEventListener("click", () => 
    menuOpenButton.click() /*Trigerea que se acitve el open button click listener, entnoces encoje el menu*/
);