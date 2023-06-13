let popup = document.getElementById("popup")
let mobileMenuBurger = document.getElementById("mobileMenuBurger")
let mobileMenu = document.getElementById("mobileMenu")
let closeMobileMenu = document.getElementById("closeMobileMenu")

function openPopUp(){
    popup.classList.add("popup--open")
}

function closePopUp(){
    popup.classList.remove("popup--open")
}

function openMenu(){
    mobileMenu.classList.add("mobile__menu--open")
    mobileMenuBurger.style.display = "none"
}

mobileMenuBurger.addEventListener("click", openMenu)
closeMobileMenu.addEventListener("click", function(){
    mobileMenu.classList.remove("mobile__menu--open")
    mobileMenuBurger.style.display = "block"

})