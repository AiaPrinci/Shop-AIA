let categories = document.getElementById('categories-id');
let categoriesSpan = document.getElementById('categories-span');

let inUl = document.getElementById('in-ul-container');
// inUl.style.display = 'none';
let inLi = document.getElementById('clothes');

categories.addEventListener('mouseenter', () => {
     // inUl.style.display = 'flex';
     categoriesSpan.innerHTML = '-';
     inUl.style.height = inUl.scrollHeight + 'px';
});

categories.addEventListener('mouseleave', () => {
     // inUl.style.display = 'none';
     categoriesSpan.innerHTML = '+';
     inUl.style.height = '0px';
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

// let burger = document.getElementById('burger');
// let burgerOnclick = document.getElementById('burger-onclick');
// let burgerMenu = document.getElementById('burger-menu');

// const myFunction = () => { 
//      burgerOnclick.style.display = (burgerOnclick.style.display == "flex") ? "none" : "flex";
// }

// burgerMenu.addEventListener('click', () => {
//      myFunction();
// })
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

// let categoriesOnclick = document.getElementById('burger-onclick-li-categories');
// let burgerOnclickSpan = document.getElementById('burger-onclick-categories-span');

// let burgerOnclickList = document.getElementById('burger-onclick-in-ul-container');
// burgerOnclickList.style.display = 'none';


// categoriesOnclick.addEventListener('mouseenter', () => {
//      burgerOnclickList.style.display = 'flex';
//      burgerOnclickSpan.innerHTML = '-';
// });

// categoriesOnclick.addEventListener('mouseleave', () => {
//      burgerOnclickList.style.display = 'none';
//      burgerOnclickSpan.innerHTML = '+';
// });

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
let imageBox3 = document.getElementById('image-box-3');
let imageBox4 = document.getElementById('image-box-4');
let clothesBox2 = document.getElementById('clothes-box-2');
let clothesBox3 = document.getElementById('clothes-box-3');
let clothesBox4 = document.getElementById('clothes-box-4');

let moreInfoClothesBtn = document.getElementById('more-info');
let moreInfoClothes = document.getElementById('more-info-clothes');
let moreInfoClothes2 = document.getElementById('more-info-clothes-1');
let moreInfoClothes3 = document.getElementById('more-info-clothes-1-1');
let moreInfoClothes4 = document.getElementById('more-info-clothes-1-1-1');
moreInfoClothes3.style.display = 'none';
moreInfoClothes2.style.display = 'none';
moreInfoClothes.style.display = 'none';
moreInfoClothes4.style.display = 'none';
let moreInfoClothesMainContent = document.getElementById('more-info-clothes-main-content');
let x = document.getElementById('x');
let x1 = document.getElementById('x-1');
let x2 = document.getElementById('x-2');
let x3 = document.getElementById('x-3');

clothesBoxEd.addEventListener('click', () => {
     moreInfoClothes.style.display = 'flex';
});

clothesBox2.addEventListener('click', () => {
     moreInfoClothes2.style.display = 'flex';
})

clothesBox3.addEventListener('click', () => {
     moreInfoClothes3.style.display = 'flex';
})

clothesBox4.addEventListener('click', () => {
     moreInfoClothes4.style.display = 'flex';
})

x.addEventListener('click', () => {
     moreInfoClothes.style.display = 'none';
})

x1.addEventListener('click', () => {
     moreInfoClothes2.style.display = 'none';
})
 
x2.addEventListener('click', () => {
     moreInfoClothes3.style.display = 'none';
})

x3.addEventListener('click', () => {
     moreInfoClothes4.style.display = 'none';
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

clothesBox3.addEventListener('mouseenter', () => {
     imageBox3.style.scale = '1.15';
});

clothesBox3.addEventListener('mouseleave', () => {
     imageBox3.style.scale = '1';
})

clothesBox4.addEventListener('mouseenter', () => {
     imageBox4.style.scale = '1.15';
})

clothesBox4.addEventListener('mouseleave', () => {
     imageBox4.style.scale = '1';
})

let shopItems = [{
     whatIsIt:'Cool T-Shirt',
     new: true,
     price: '200$',
     color: 'Blue and White',},
     {whatIsIt:'Cool Black Shirt',
     new: true,
     price: '300$',
     color: 'black',
     },
     {whatIsIt:'White Shirt For Blacks',
     new: true,
     price: 'Free',
     color: 'white'},
     {whatIsIt:'Red T-Shirt',
     new: true,
     price: '10$',
     color: 'Red',}]
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

let headerContainer = document.getElementById('header-container');

// document.addEventListener('scroll', () => {
//      headerContainer.classList.add('scroll-down');
// })

var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    headerContainer.style.marginTop = '16px';
    headerContainer.style.borderRadius = '5px';
  } else {
    headerContainer.style.marginTop = '0px';
    headerContainer.style.borderRadius = '0px';
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}