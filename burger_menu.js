const burgerMenu = document.getElementById('hamburger');


document.getElementById ('hamburger-button').addEventListener("click", openBurger)
let close = false
function openBurger(){
    if(!close){
    burgerMenu.style.transition = '0.5s';
    burgerMenu.style.left = '0px';
    close = true;
    } else {
    burgerMenu.style.transition = 'O,1s';
    burgerMenu.style.left = '-500px'
    close = false
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
            
    }
        

    

    closeBurger(); */



