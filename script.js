
const buttonBurgerMenu = document.querySelector(".burger-toggle")
const burgerMenu = document.querySelector(".burger-menu")


console.log("Script started!")
console.log(buttonBurgerMenu)

buttonBurgerMenu.onclick = function(){
    burgerMenu.classList.toggle('open')
}