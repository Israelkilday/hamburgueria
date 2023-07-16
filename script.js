const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav_menu");

menu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    NavMenu.classList.toggle("ativo");
})