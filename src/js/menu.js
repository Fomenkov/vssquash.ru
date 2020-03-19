let menuButton = document.querySelector(".hamburger__wrap");
let menu = document.querySelector(".site-navigation__list");

menuButton.addEventListener("click", function () {
   menu.classList.toggle("site-navigation__list--show");
});
