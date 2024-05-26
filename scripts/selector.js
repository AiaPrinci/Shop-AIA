let shopItems = [
    {
    whatIsIt:'Cool T-Shirt',
    new: true,
    price: '200$',
    color: 'Blue and White',
    },
    {
    whatIsIt:'Cool Black Shirt',
    new: true,
    price: '300$',
    color: 'black',
    },
    {
    whatIsIt:'White Shirt For Blacks',
    new: true,
    price: 'Free',
    color: 'white'
    },
    {
    whatIsIt:'Red T-Shirt',
    new: true,
    price: '10$',
    color: 'Red',
    }   
];

let controllerItems = [
    {
        whatIsIt: 'Ps 5 Controller',
        new: true,
        price: '50$',
        color: 'Black and White'
    },
    {
        whatIsIt: 'Ps 5 Slim Controller',
        new: true,
        price: '45$',
        color: 'Black and White'
    },
    {
        whatIsIt: 'Ps 4 Controller',
        new: true,
        price: '30$',
        color: 'Black'
    },
    {
        whatIsIt: 'Ps 4 Slim Controller',
        new: true,
        price: '25$',
        color: 'Black'
    }
];

let shirtType1 = document.getElementById('shirt-type-1');
let newType2 = document.getElementById('new-type-2');
let price3 = document.getElementById('price-3');
let color4 = document.getElementById('color-4');

shirtType1.innerHTML += shopItems[0].whatIsIt;
newType2.innerHTML += shopItems[0].new;
price3.innerHTML += shopItems[0].price;
color4.innerHTML += shopItems[0].color;

let shirtTypeBlack = document.getElementById('shirt-type-1-black');
let newTypeBlack = document.getElementById('new-type-2-black');
let priceBlack = document.getElementById('price-3-black');
let colorBlack = document.getElementById('color-4-black');

shirtTypeBlack.innerHTML += shopItems[1].whatIsIt;
newTypeBlack.innerHTML += shopItems[1].new;
priceBlack.innerHTML += shopItems[1].price;
colorBlack.innerHTML += shopItems[1].color;

let shirtTypeRacism = document.getElementById('shirt-type-1-racism');
let newTypeRacism = document.getElementById('new-type-2-racism');
let priceRacism = document.getElementById('price-3-racism');
let colorRacism = document.getElementById('color-4-racism');

shirtTypeRacism.innerHTML += shopItems[2].whatIsIt;
newTypeRacism.innerHTML += shopItems[2].new;
priceRacism.innerHTML += shopItems[2].price;
colorRacism.innerHTML += shopItems[2].color;

let shirtTypeRed = document.getElementById('shirt-type-1-red');
let newTypeRed = document.getElementById('new-type-2-red');
let priceRed = document.getElementById('price-3-red');
let colorRed = document.getElementById('color-4-red'); 

shirtTypeRed.innerHTML += shopItems[3].whatIsIt;
newTypeRed.innerHTML += shopItems[3].new;
priceRed.innerHTML += shopItems[3].price;
colorRed.innerHTML += shopItems[3].color;

let text = document.getElementById('shirt-type-control-1');
let text2 = document.getElementById('new-type-control-2');
let text3 = document.getElementById('price-control-3');
let text4 = document.getElementById('color-control-4');

text.innerHTML += controllerItems[0].whatIsIt;
text2.innerHTML += controllerItems[0].new;
text3.innerHTML += controllerItems[0].price;
text4.innerHTML += controllerItems[0].color;

let text1 = document.getElementById('shirt-type-controller-1');
let text22 = document.getElementById('new-type-controller-2');
let text33 = document.getElementById('price-controller-3');
let text44 = document.getElementById('color-controller-4');

text1.innerHTML += controllerItems[1].whatIsIt;
text22.innerHTML += controllerItems[1].new;
text33.innerHTML += controllerItems[1].price;
text44.innerHTML += controllerItems[1].color;

let text11 = document.getElementById('shirt-type-controller-1-1');
let text222 = document.getElementById('new-type-controller-1-2');
let text333 = document.getElementById('price-controller-1-3');
let text444 = document.getElementById('color-controller-1-4');

text11.innerHTML += controllerItems[2].whatIsIt;
text222.innerHTML += controllerItems[2].new;
text333.innerHTML += controllerItems[2].price;
text444.innerHTML += controllerItems[2].color;

let text111 = document.getElementById('shirt-type-controller-2-1');
let text2222 = document.getElementById('new-type-controller-2-2');
let text3333 = document.getElementById('price-controller-2-3');
let text4444 = document.getElementById('color-controller-2-4');

text111.innerHTML += controllerItems[3].whatIsIt;
text2222.innerHTML += controllerItems[3].new;
text3333.innerHTML += controllerItems[3].price;
text4444.innerHTML += controllerItems[3].color;

let clothesBoxes = document.querySelectorAll('.clothes-box');
let controllerBoxes = document.querySelectorAll('.controller-box');

const clothesBoxDisappear = () => {
    clothesBoxes.forEach((clothesItems) => {
        clothesItems.style.display = 'none';
        controllerBoxes.forEach((controllerItems) => {
            controllerItems.style.display = 'block';
        })
    })
};

const controllerBoxesDissapear = () => {
    controllerBoxes.forEach((controllerItems) => {
        controllerItems.style.display = 'none';
        clothesBoxes.forEach((clothesItems) => {
            clothesItems.style.display = 'block';
        })
    })
}

const appear = () => {
    controllerBoxes.forEach((controllerItems) => {
        controllerItems.style.display = 'block';
    });

    clothesBoxes.forEach((clothesItems) => {
        clothesItems.style.display = 'block';
    });
};

let mainContent = document.getElementById('main-content');

let filteredData = shopItems.concat(controllerItems);

console.log(mainContent);

let selector = document.getElementById('selector');
selector.addEventListener('change', (event) => {
    let selectedValue = event.target.value;
    if (selectedValue === 't-shirts') {
        controllerBoxesDissapear();
    } else if (selectedValue === 'controller') {
        clothesBoxDisappear();
    } else if (selectedValue === 'all-categories') {
        appear();
    } else {
        console.log('Error');
        return;
    }
});