'use strict'; 
(function () {
    let toTopButton = document.querySelector('#to_top_button');

    window.onscroll = function() {
        if (window.pageYOffset > document.documentElement.clientHeight) {
            toTopButton.classList.remove('display_none');
        } else {
            toTopButton.classList.add('display_none');
        }
    }

    function scrollToTop () {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -100);
            setTimeout(scrollToTop, 0);
        }   
    }

    toTopButton.addEventListener('click', function() {
        scrollToTop ();
    })
}());