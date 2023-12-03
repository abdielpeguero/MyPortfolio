const burgerMenu = document.querySelector(".burger-menu");[0]
const navbarLinks = document.querySelector(".navbar-links");[0]

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})

