document.addEventListener("DOMContentLoaded", function() {
    const burgerMenuButtonContainer = document.querySelector('.burgerMenuButtonContainer');
    const burgerMenuContainer = document.querySelector('.burgerMenuContainer');

    burgerMenuContainer.style.width = '0px';
    burgerMenuContainer.style.paddingTop = '90px';

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