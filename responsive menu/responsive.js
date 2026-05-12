
let menuButton = document.getElementsByClassName("menu-btn")[0];

let nav = document.querySelector("nav");

let bars = document.querySelectorAll("div");

menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event){
    nav.classList.toggle("unhide");
    menuButton.classList.toggle("change")
}