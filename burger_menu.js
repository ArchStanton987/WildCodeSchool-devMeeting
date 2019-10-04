const burgerMenu = document.getElementById('hamburger');
const burgerButton = document.getElementById('hamburger-button');
const buttonCloseBurger = document.getElementById('close-burger');

document.getElementById ('hamburger-button').addEventListener("click", openBurger)
let close = false
function openBurger(){
    if(!close){
    burgerMenu.style.transition = '0.5s';
    burgerMenu.style.left = '0px';
    burgerButton.style.display = 'none';
    buttonCloseBurger.style.display = 'inline-block';
    close = true;
    } else {
    burgerMenu.style.transition = 'O,1s';
    burgerMenu.style.left = '-500px';
    close = false;
    }    
}
/*
const anchorLinks = document.getElementsByClassName('anchorLinks');



    function closeBurger(){
        for(let i = 0; i < anchorLinks; i++){
            document.anchorLinks.addEventListener('click', closeWithAnchorLinks (){
                burgerMenu.style.transition = 'O,1s'
                burgerMenu.style.left = '-500px'
                close = false
            })            
        }     
            
    }*/

document.getElementById ('close-burger').addEventListener("click", closeBurger)

function closeBurger(){
    burgerMenu.style.transition = 'O,1s';
    burgerMenu.style.left = '-500px';
    burgerButton.style.display = 'inline-block';
    buttonCloseBurger.style.display = 'none';
    close = false   
}   
        

    





