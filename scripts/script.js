let categories = document.getElementById('categories-id');
let categoriesSpan = document.getElementById('categories-span');

let inUl = document.getElementById('in-ul-container');
let inLi = document.getElementById('clothes');

categories.addEventListener('mouseenter', () => {
     categoriesSpan.innerHTML = '-';
     inUl.style.height = inUl.scrollHeight + 'px';
});

categories.addEventListener('mouseleave', () => {
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

window.addEventListener('load', () => {
     setTimeout(() => {
          animation();
     }, 4500);
     
     setTimeout(() => {
          sideElement.remove();
     }, 5000);
});

let clothePic = document.getElementById('clothe-pic');
let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');
let box4 = document.getElementById('box-4');

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

let headerContainer = document.getElementById('header-container');

var scrollableElement = document.body;

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

let scroll = document.getElementById('scroll');

const scrolling = () => {
     scroll.style.opacity = '0.0';
     scroll.style.transition = 'all 0.3s';
}

scroll.addEventListener('click', () => {
     scrolling();
});

document.addEventListener('wheel' , () => {
     scroll.style.opacity = '1';
});

let controllerMoreInfo = document.querySelectorAll('.controller-more-info');

controllerMoreInfo.forEach((controllers) => {
     controllers.style.display = 'none';
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let moreInfoController = document.getElementById('more-info-controller');
let controller = document.getElementById('controller-box-5');
let x5 = document.getElementById('x-5');

let moreInfoController1 = document.getElementById('more-info-controller-1');
let controller1 = document.getElementById('controller-box-6');
let x6 = document.getElementById('x-6');

let moreInfoController2 = document.getElementById('more-info-controller-1-1');
let controller2 = document.getElementById('controller-box-7');
let x7 = document.getElementById('x-7');

let moreInfoController3 = document.getElementById('more-info-controller-1-1-1');
let controller3 = document.getElementById('controller-box-8');
let x8 = document.getElementById('x-8');

controller.addEventListener('click', () => {
     moreInfoController.style.display = 'flex';
});

x5.addEventListener('click', () => {
     moreInfoController.style.display = 'none';
});

controller1.addEventListener('click', () => {
     moreInfoController1.style.display = 'flex';
})

x6.addEventListener('click', () => {
     moreInfoController1.style.display = 'none';
})

controller2.addEventListener('click', () => {
     moreInfoController2.style.display = 'flex';
})

x7.addEventListener('click', () => {
     moreInfoController2.style.display = 'none';
})

controller3.addEventListener('click', () => {
     moreInfoController3.style.display = 'flex';
});

x8.addEventListener('click', () => {
     moreInfoController3.style.display = 'none';
})


