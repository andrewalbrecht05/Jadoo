
const buttonBurgerMenu = document.getElementsByClassName("burger-toggle")
const burgerMenu = document.querySelector(".burger-menu")
const burgerMenuStyles = 
`
    display: flex
`
console.log("Script started!")
console.log(buttonBurgerMenu)

buttonBurgerMenu[0].addEventListener('change', () => 
{
    if( buttonBurgerMenu[0].checked == true)
    {
        
        console.log("button checked")
        console.log(burgerMenu)
        
        burgerMenu.setAttribute("style", burgerMenuStyles);
        burgerMenu.classList.add('burger-menu--active')
    }
    else
    {
        document.getElementsByClassName("burger-menu")[0].setAttribute("style", "display: none")
        burgerMenu.classList.remove('burger-menu--active')
    }
});