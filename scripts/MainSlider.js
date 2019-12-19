'use strict';

function MyFirstSlider(selector) {
    let slider = document.querySelector(selector),
        wrapper = slider.querySelector('.slider_wrapper'),
        slides = slider.querySelectorAll('.slides'),
        labelsContainer = slider.querySelector('.slider_labels'),
        swipeLeft = slider.querySelector('.left_arrow'),
        swipeRight = slider.querySelector('.right_arrow'),
        currentItem = 0,
        clickedLabel,
        sliderWidth = wrapper.offsetWidth,
        positionOnLeft = 0,
        position = {
            min: 0,
            max: slides.length - 1,
        },
        dotsCount = '';

    for (let i = 0; i <= position.max; i++) {
        dotsCount += '<div class="slider_label"></div>';
    }

    labelsContainer.innerHTML = dotsCount;
    let labels = slider.querySelectorAll('.slider_label');
    labels[0].classList.add('checked');

    function resize() {
        sliderWidth = wrapper.offsetWidth;
        positionOnLeft = -currentItem * sliderWidth;
        wrapper.style.marginLeft = positionOnLeft + 'px';
    }
    
    function sliderControl(e) {
        if (e.target.closest('.right_arrow') && swipeRight && swipeLeft) {
            if (currentItem == position.max) return;
            labels[currentItem].classList.remove('checked');
            currentItem++;
            positionOnLeft -= sliderWidth;
            wrapper.style.marginLeft = positionOnLeft + 'px';
            labels[currentItem].classList.add('checked');

            if (currentItem == position.max) {
                swipeRight.classList.add('display_none');
            } else {
                swipeLeft.classList.remove('display_none');
            }
        }

        if (e.target.closest('.left_arrow') && swipeRight && swipeLeft) {
            if (currentItem == position.min) return;
            labels[currentItem].classList.remove('checked');
            currentItem--;
            positionOnLeft += sliderWidth;
            wrapper.style.marginLeft = positionOnLeft + 'px';
            labels[currentItem].classList.add('checked');

            if (currentItem == position.min) {
                swipeLeft.classList.add('display_none');
            } else {
                swipeRight.classList.remove('display_none');
            }
        }

        if (e.target.className == 'slider_label') {
            for (let i = 0; i <= position.max; i++ ) {
                if (e.target.closest('.slider_label') == labels[i]) {
                    clickedLabel = i;
                }
            }

            if (clickedLabel == currentItem) return;
            labels[currentItem].classList.remove('checked');
            positionOnLeft += sliderWidth * (currentItem - clickedLabel);
            currentItem = clickedLabel;
            wrapper.style.marginLeft = positionOnLeft + 'px';
            labels[currentItem].classList.add('checked');

            if (swipeRight && swipeLeft) {
                if (currentItem == position.min) {
                    swipeLeft.classList.add('display_none');
                    swipeRight.classList.remove('display_none');
                } else if (currentItem == position.max){
                    swipeRight.classList.add('display_none');
                    swipeLeft.classList.remove('display_none');
                } else {
                    swipeLeft.classList.remove('display_none');
                    swipeRight.classList.remove('display_none');
                }
            }
        }
    }
    
    slider.addEventListener('click', sliderControl);
    window.addEventListener('resize', resize);
}

MyFirstSlider('.slider');
MyFirstSlider('.testimonals_slider');
MyFirstSlider('.services_slider');