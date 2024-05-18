let categories = document.getElementById('categories-id');
let categoriesSpan = document.getElementById('categories-span');

let inUl = document.getElementById('in-ul-container');
inUl.style.display = 'none';
let inLi = document.getElementById('clothes');

categories.addEventListener('mouseenter', () => {
     inUl.style.display = 'flex';
     categoriesSpan.innerHTML = '-';
});

categories.addEventListener('mouseleave', () => {
     inUl.style.display = 'none';
     categoriesSpan.innerHTML = '+';
});

categories.addEventListener('click', () => {
     inUl.style.display = 'flex';
     categoriesSpan.innerHTML = '-';
});

let mainBranch = document.getElementById('second-box');
let mainBranchImage = document.getElementById('image-main');

let secondBranch = document.getElementById('third-box');
let secondBranchImage = document.getElementById('image-second');

mainBranch.addEventListener('mouseover', () => {
     mainBranchImage.style.scale = '1.05';
     mainBranch.style.cursor = 'pointer';
})

mainBranch.addEventListener('mouseleave', () => {
     mainBranchImage.style.scale = '1';
     mainBranch.style.cursor = 'pointer';
})

secondBranch.addEventListener('mouseover', () => {
     secondBranchImage.style.scale = '1.05';
     secondBranch.style.cursor = 'pointer';
})

secondBranch.addEventListener('mouseleave', () => {
     secondBranchImage.style.scale = '1';
     secondBranch.style.cursor = 'pointer';
})

let ulFor = document.querySelectorAll('.ul');
let liFor = document.querySelectorAll('.btn-container');

liFor.forEach((item) => {
    item.addEventListener('click', () => {
        liFor.forEach((list) => {
            list.style.backgroundColor = 'rgba(36, 1, 68, 0.853)';
        })
        item.style.backgroundColor = 'rgba(36, 1, 68, 0.287)';
        item.style.backdropFilter = 'blur(8px)';
    })
});

let sideElement = document.querySelector('.box');

const animation = () => {
     sideElement.style.opacity = '0.0';
     sideElement.style.transition = 'all 0.3s';
}

setTimeout(() => {
     animation();
}, 4500);

setTimeout(() => {
     sideElement.remove();
}, 5000);

let clothePic = document.getElementById('clothe-pic');
let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');
let box4 = document.getElementById('box-4');

// box1.addEventListener('mouseover', () => {
//      clothePic.style.backgroundImage = 'url(./Images/blackshirt.png)';
// });

// box2.addEventListener('mouseover', () => {
//      clothePic.style.backgroundImage = 'url(./Images/white.png)';
//      clothePic.style.backgroundSize = 'cover';
//      clothePic.style.backgroundPosition = 'center';
// });

// box3.addEventListener('mouseover', () => {
//      clothePic.style.backgroundImage = 'url(./Images/whiteshirt.png)';
//      clothePic.style.backgroundSize = 'cover';
//      clothePic.style.backgroundPosition = 'center';
// });

// box4.addEventListener('mouseover', () => {
//      clothePic.style.backgroundImage = 'url(./Images/white1.png)';
//      clothePic.style.backgroundSize = 'cover';
//      clothePic.style.backgroundPosition = 'center';
// });

let burger = document.getElementById('burger');
let burgerOnclick = document.getElementById('burger-onclick');
let burgerMenu = document.getElementById('burger-menu');

const myFunction = () => { 
     burgerOnclick.style.display = (burgerOnclick.style.display == "flex") ? "none" : "flex";
}

burgerMenu.addEventListener('click', () => {
     myFunction();
})
// let listBox1 = document.getElementById('list-box-1');
// let listBox2 = document.getElementById('list-box-2');
// let listBox3 = document.getElementById('list-box-3');
// let listBox4 = document.getElementById('list-box-4');


// let shirtType = document.getElementById('shirt-type');
// let newType = document.getElementById('new-type');
// let price = document.getElementById('price');
// let color = document.getElementById('color');

// let mainInfoImageBox = document.getElementById('main-info-image-box')

// listBox1.addEventListener('mouseover', () => {
//      shirtType.innerHTML += shopItems[0].whatIsIt;
//      newType.innerHTML += shopItems[0].new;
//      price.innerHTML += shopItems[0].price;
//      color.innerHTML += shopItems[0].color;
// })

// listBox1.addEventListener('mouseout', () => {
//      shirtType.innerHTML = `Shirt Type:  `;
//      newType.innerHTML = 'New:  ';
//      price.innerHTML = 'Price:  ';
//      color.innerHTML = 'Color:  '
// })

// listBox2.addEventListener('mouseover', () => {
//      shirtType.innerHTML += shopItems[1].whatIsIt;
//      newType.innerHTML += shopItems[1].new;
//      price.innerHTML += shopItems[1].price;
//      color.innerHTML += shopItems[1].color;
// })

// listBox2.addEventListener('mouseout', () => {
//      shirtType.innerHTML = `Shirt Type:  `;
//      newType.innerHTML = 'New:  ';
//      price.innerHTML = 'Price:  ';
//      color.innerHTML = 'Color:  '
// })

// listBox3.addEventListener('mouseover', () => {
//      shirtType.innerHTML += shopItems[2].whatIsIt;
//      newType.innerHTML += shopItems[2].new;
//      price.innerHTML += shopItems[2].price;
//      color.innerHTML += shopItems[2].color;
// })

// listBox3.addEventListener('mouseout', () => {
//      shirtType.innerHTML = `Shirt Type:  `;
//      newType.innerHTML = 'New:  ';
//      price.innerHTML = 'Price:  ';
//      color.innerHTML = 'Color:  '
// })

// listBox4.addEventListener('mouseover', () => {
//      shirtType.innerHTML += shopItems[3].whatIsIt;
//      newType.innerHTML += shopItems[3].new;
//      price.innerHTML += shopItems[3].price;
//      color.innerHTML += shopItems[3].color;
// })

// listBox4.addEventListener('mouseout', () => {
//      shirtType.innerHTML = `Shirt Type:  `;
//      newType.innerHTML = 'New:  ';
//      price.innerHTML = 'Price:  ';
//      color.innerHTML = 'Color:  '
// })

let categoriesOnclick = document.getElementById('burger-onclick-li-categories');
let burgerOnclickSpan = document.getElementById('burger-onclick-categories-span');

let burgerOnclickList = document.getElementById('burger-onclick-in-ul-container');
burgerOnclickList.style.display = 'none';


categoriesOnclick.addEventListener('mouseenter', () => {
     burgerOnclickList.style.display = 'flex';
     burgerOnclickSpan.innerHTML = '-';
});

categoriesOnclick.addEventListener('mouseleave', () => {
     burgerOnclickList.style.display = 'none';
     burgerOnclickSpan.innerHTML = '+';
});

// categoriesOnclick.addEventListener('click', () => {
//      burgerOnclickList.style.display = 'flex';
//      burgerOnclickSpan.innerHTML = '-';
// });

// categoriesOnclick.addEventListener('click', () => {
//      burgerOnclickList.style.display = 'none';
//      burgerOnclickSpan.innerHTML = '+';
// })

let clothesBoxEd = document.querySelector('#clothes-box-1');
let imageBox = document.getElementById('image-box-1');
let imageBox2 = document.getElementById('image-box-2');
let clothesBox2 = document.getElementById('clothes-box-2');

let moreInfoClothesBtn = document.getElementById('more-info');
let moreInfoClothes = document.getElementById('more-info-clothes');
let moreInfoClothes2 = document.getElementById('more-info-clothes-1');
moreInfoClothes2.style.display = 'none';
moreInfoClothes.style.display = 'none';
let moreInfoClothesMainContent = document.getElementById('more-info-clothes-main-content');
let x = document.getElementById('x');
let x1 = document.getElementById('x-1');

clothesBoxEd.addEventListener('click', () => {
     moreInfoClothes.style.display = 'flex';
});

clothesBox2.addEventListener('click', () => {
     moreInfoClothes2.style.display = 'flex';
})

x.addEventListener('click', () => {
     moreInfoClothes.style.display = 'none';
})

x1.addEventListener('click', () => {
     moreInfoClothes2.style.display = 'none';
})

clothesBoxEd.addEventListener('mouseover', () => {
     imageBox.style.scale = '1.15';
});

clothesBoxEd.addEventListener('mouseleave', () => {
     imageBox.style.scale = '1';
})

clothesBox2.addEventListener('mouseenter', () => {
     imageBox2.style.scale = '1.15';
})

clothesBox2.addEventListener('mouseleave', () => {
     imageBox2.style.scale = '1';
})

let shopItems = [{
     whatIsIt:'Cool T-Shirt',
     new: true,
     price: '200$',
     color: 'Blue and White',
     image: 'Images\blackshirt.png'},
     {whatIsIt:'CoolBlackShirt',
     new: true,
     price: '300$',
     color: 'black',
     image: 'Images\whiteshirt.png'
     },
     {whatIsIt:'CoolWhiteShirt(with no painting)',
     new: true,
     price: '150$',
     color: 'white',
     image: 'Images\white.png'},
     {whatIsIt:'CoolestWhiteShirt',
     new: true,
     price: '300$',
     color: 'White',
     image: 'Images\white1.png'}]
;

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