const $hamburger = document.querySelector(".hamburger");
const $hamButton = document.querySelector(".hamburger-box");
const $menu = document.querySelector(".menu");

console.log($hamButton);

$hamButton.addEventListener("click", (e) => {
  $hamburger.classList.toggle("is-active");
  $menu.classList.toggle("active-menu");
});
