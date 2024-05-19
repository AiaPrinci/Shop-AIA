document.addEventListener("DOMContentLoaded", function() {
    const burgerMenuButtonContainer = document.querySelector('.burgerMenuButtonContainer');
    const burgerMenuContainer = document.querySelector('.burgerMenuContainer');
    const burgerMenuButtno = document.querySelector('.burgerMenuButton');
    const header = document.querySelector('header');
    const burgerMenuContainerWidth = burgerMenuContainer.clientWidth;

    burgerMenuContainer.style.width = '0px';
    burgerMenuContainer.style.paddingTop = '70px';

    burgerMenuButtonContainer.addEventListener('click' , ()=>{
        if(burgerMenuButtonContainer.classList.contains('active')){
            burgerMenuContainer.style.width = '0px';
            burgerMenuButtonContainer.classList.remove('active');
        }else{
            burgerMenuContainer.style.width = '160px';
            burgerMenuButtonContainer.classList.add('active');
        }
    })
});