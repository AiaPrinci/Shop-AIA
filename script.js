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

sideElement.addEventListener('click', () => {
     sideElement.remove();
})

let clothePic = document.getElementById('clothe-pic');
let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');
let box4 = document.getElementById('box-4');

box1.addEventListener('mouseover', () => {
     clothePic.style.backgroundImage = 'url(./Images/blackshirt.png)';
});

box2.addEventListener('mouseover', () => {
     clothePic.style.backgroundImage = 'url(./Images/white.png)';
     clothePic.style.backgroundSize = 'cover';
     clothePic.style.backgroundPosition = 'center';
});

box3.addEventListener('mouseover', () => {
     clothePic.style.backgroundImage = 'url(./Images/whiteshirt.png)';
     clothePic.style.backgroundSize = 'cover';
     clothePic.style.backgroundPosition = 'center';
});

box4.addEventListener('mouseover', () => {
     clothePic.style.backgroundImage = 'url(./Images/white1.png)';
     clothePic.style.backgroundSize = 'cover';
     clothePic.style.backgroundPosition = 'center';
});

let moreInfoClothesBtn = document.getElementById('more-info');
let moreInfoClothes = document.getElementById('more-info-clothes');
moreInfoClothes.style.display = 'none';
let moreInfoClothesMainContent = document.getElementById('more-info-clothes-main-content');
let x = document.getElementById('x');

moreInfoClothesBtn.addEventListener('click', () => {
     moreInfoClothes.style.display = 'flex';
});

x.addEventListener('click', () => {
     moreInfoClothes.style.display = 'none';
})

let burger = document.getElementById('burger');
let burgerOnclick = document.getElementById('burger-onclick');

const myFunction = () => { 
     burgerOnclick.style.display = (burgerOnclick.style.display == "flex") ? "none" : "flex";
}

let shopItems = [{
     whatIsIt:'CoolBlackShirt',
     new: true,
     price: '200$',
     color: 'black',
     image: 'Images\blackshirt.png'},
     {whatIsIt:'CoolWhiteShirt',
     new: true,
     price: '200$',
     color: 'white',
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
let listBox1 = document.getElementById('list-box-1');
let listBox2 = document.getElementById('list-box-2');
let listBox3 = document.getElementById('list-box-3');
let listBox4 = document.getElementById('list-box-4');


let shirtType = document.getElementById('shirt-type');
let newType = document.getElementById('new-type');
let price = document.getElementById('price');
let color = document.getElementById('color');

let mainInfoImageBox = document.getElementById('main-info-image-box')

listBox1.addEventListener('mouseover', () => {
     shirtType.innerHTML += shopItems[0].whatIsIt;
     newType.innerHTML += shopItems[0].new;
     price.innerHTML += shopItems[0].price;
     color.innerHTML += shopItems[0].color;
})

listBox1.addEventListener('mouseout', () => {
     shirtType.innerHTML = `Shirt Type:  `;
     newType.innerHTML = 'New:  ';
     price.innerHTML = 'Price:  ';
     color.innerHTML = 'Color:  '
})

listBox2.addEventListener('mouseover', () => {
     shirtType.innerHTML += shopItems[1].whatIsIt;
     newType.innerHTML += shopItems[1].new;
     price.innerHTML += shopItems[1].price;
     color.innerHTML += shopItems[1].color;
})

listBox2.addEventListener('mouseout', () => {
     shirtType.innerHTML = `Shirt Type:  `;
     newType.innerHTML = 'New:  ';
     price.innerHTML = 'Price:  ';
     color.innerHTML = 'Color:  '
})

listBox3.addEventListener('mouseover', () => {
     shirtType.innerHTML += shopItems[2].whatIsIt;
     newType.innerHTML += shopItems[2].new;
     price.innerHTML += shopItems[2].price;
     color.innerHTML += shopItems[2].color;
})

listBox3.addEventListener('mouseout', () => {
     shirtType.innerHTML = `Shirt Type:  `;
     newType.innerHTML = 'New:  ';
     price.innerHTML = 'Price:  ';
     color.innerHTML = 'Color:  '
})

listBox4.addEventListener('mouseover', () => {
     shirtType.innerHTML += shopItems[3].whatIsIt;
     newType.innerHTML += shopItems[3].new;
     price.innerHTML += shopItems[3].price;
     color.innerHTML += shopItems[3].color;
})

listBox4.addEventListener('mouseout', () => {
     shirtType.innerHTML = `Shirt Type:  `;
     newType.innerHTML = 'New:  ';
     price.innerHTML = 'Price:  ';
     color.innerHTML = 'Color:  '
})

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