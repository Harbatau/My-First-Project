'use strict';
function MyFirstCarousel(selector) {
    let carousel = document.querySelector(selector),
        container = carousel.querySelector('.carousel_container'),
        items = container.querySelectorAll('img'),
        carouselWidth = container.offsetWidth,
        visibleItems = 3,
        positionOnLeft = 0,
        eachItemWidth = carouselWidth / visibleItems,
        leftmostItem = 1,
        rightmostItem = visibleItems;

    container.prepend(items[items.length - 1]);
    items = container.querySelectorAll('img');
    
    function resizing() {
       carouselWidth = container.offsetWidth;
       if (carouselWidth <= 600 && carouselWidth > 430) {
            visibleItems = 2;
            rightmostItem = leftmostItem + 1;
        } else if (carouselWidth <= 430) {
            visibleItems = 1;
            rightmostItem = leftmostItem;
        } else {
            visibleItems = 3;
            rightmostItem = leftmostItem + 2;
        }
        eachItemWidth = carouselWidth / visibleItems;
        for (let i = 0; i < items.length; i++) {
            let margin = (eachItemWidth - items[i].offsetWidth) / 2;
            items[i].style.marginLeft = items[i].style.marginRight = margin + 'px';
            positionOnLeft = eachItemWidth * (i - 1);
            items[i].style.left = positionOnLeft + 'px';
        }
    }

    resizing();

    function swipe(e) {
        if (e.target.closest('.right_arrow')) {
            if (leftmostItem !== 1) {
                leftmostItem--;
                rightmostItem--;
                for (let item of items) {
                    item.style.left = (parseInt(item.style.left) + eachItemWidth) + 'px';
                }
            } else {
                positionOnLeft = eachItemWidth * (-2);
                container.prepend(items[items.length - 1]);
                items = container.querySelectorAll('img');
                items[0].style.left = positionOnLeft + 'px';
                for (let item of items) {
                    item.style.left = (parseInt(item.style.left) + eachItemWidth) + 'px';
                }
            }
        } else if (e.target.closest('.left_arrow')) {
            if (rightmostItem !== items.length - (items.length - visibleItems)) {
                leftmostItem++;
                rightmostItem++;
                for (let item of items) {
                    item.style.left = (parseInt(item.style.left) - eachItemWidth) + 'px';
                }
            } else {
                positionOnLeft = eachItemWidth * (items.length - 1);
                container.append(items[0]);
                items = container.querySelectorAll('img');
                items[items.length - 1].style.left = positionOnLeft + 'px';
                for (let item of items) {
                    item.style.left = (parseInt(item.style.left) - eachItemWidth) + 'px';
                }
            }
        }

    }
   
    carousel.addEventListener('click', swipe);
    window.addEventListener('resize', resizing);
}

MyFirstCarousel('.carousel');