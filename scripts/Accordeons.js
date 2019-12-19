'use strict';
function accordeon (selector) {
    let mainAccordeon = document.querySelector('.accordeon'),
        verAccContainers = mainAccordeon.querySelectorAll('.vertical_accordeon_container'),
        verAccLabels = mainAccordeon.querySelectorAll('.vertical_accordeon_label'),
        horAccLabels = mainAccordeon.querySelectorAll('.horizontal_accordeon_label'),
        horAccItems = mainAccordeon.querySelectorAll('.horizontal_accordeon_item'),
        verCurrItem = 0,
        horCurrItem = 0;

    function accordeonControl (e) {
        if (e.target.closest('.vertical_accordeon_label')) {
            verAccContainers[verCurrItem].classList.remove('checked');
            for (let i = 0; i < verAccLabels.length; i++) {
                if (e.target.closest('.vertical_accordeon_label') == verAccLabels[i].closest('.vertical_accordeon_label')) {
                verCurrItem = i;
                break;
                }
            }
            verAccLabels[verCurrItem].classList.add('checked');
            verAccContainers[verCurrItem].classList.add('checked');
        } else if (e.target.closest('.horizontal_accordeon_label')) {
            horAccLabels[horCurrItem].classList.remove('checked');
            horAccItems[horCurrItem].classList.remove('checked');
            for (let j = 0; j < horAccLabels.length; j++) {
                if (e.target.closest('.horizontal_accordeon_label') == horAccLabels[j].closest('.horizontal_accordeon_label')) {
                horCurrItem = j;
                break;
                }
            }
            horAccLabels[horCurrItem].classList.add('checked');
            horAccItems[horCurrItem].classList.add('checked');
        
        }
    }
    
       
    mainAccordeon.addEventListener('click', accordeonControl);
        
}

accordeon ('.accordeon');