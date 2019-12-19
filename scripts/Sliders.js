'use strict';
function sliderWithoutArrows(selector) {
    let slider = document.querySelector(selector),
        wrapper = slider.querySelector('.slider_wrapper'),
        slides = slider.querySelectorAll('.slides'),
        labelsContainer = slider.querySelector('.slider_labels'),
        currentItem = 0,
        sliderWidth = slider.offsetWidth,
        clickedLabel,
        positionOnLeft = 0;
    
    let position = {
        min: 0,
        max: slides.length - 1,
    }

    let dotsCount = '';
    for (let i = 0; i <= position.max; i++) {
        dotsCount += '<div class="slider_label"></div>';
    }
    labelsContainer.innerHTML = dotsCount;
    let labels = slider.querySelectorAll('.slider_label');
    labels[0].classList.add('checked');
    
    function resize () {
        sliderWidth = wrapper.offsetWidth;
        positionOnLeft = -currentItem * sliderWidth;
        wrapper.style.marginLeft = positionOnLeft + 'px';
    }
    
    function sliderControl (e) {
        if (e.target.closest('.slider_label')) {
            for (let i = 0; i <= position.max; i++ ) {
                if (e.target.closest('.slider_label') == labels[i]) {
                    clickedLabel = i;
                    break;
                }
            }
            if (clickedLabel == currentItem) return;
            labels[currentItem].classList.remove('checked');
            positionOnLeft += sliderWidth * (currentItem - clickedLabel);
            currentItem = clickedLabel;
            wrapper.style.marginLeft = positionOnLeft + 'px';
            labels[currentItem].classList.add('checked');
        }
    }

    slider.addEventListener('click', sliderControl);
    window.addEventListener('resize', resize);
}

sliderWithoutArrows ('.testimonals_slider');
sliderWithoutArrows ('.services_slider');
