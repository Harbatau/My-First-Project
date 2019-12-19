'use strict';
function navAnimation () {
    let navMenu = document.querySelectorAll('nav'),
    mouseoverTime,
    mouseoutTime;
            
    function setAnimClass (e) {
        if (e.target.closest('.nav_button')) {
            e.target.classList.add('hover');
            }
        mouseoverTime = new Date ();
        }
    
    function delAnimClass (e) {
        if (e.target.classList.contains('hover')) {
            mouseoutTime = new Date ();
            let diff = mouseoutTime - mouseoverTime;
            if (diff <= 400) {
                setTimeout(() => e.target.classList.remove('hover'), 400 - diff);
            } else {
                e.target.classList.remove('hover');
            }
        }
    }
        
    for (let menu of navMenu) {
        menu.addEventListener('mouseover', setAnimClass);
        menu.addEventListener('mouseout', delAnimClass);
    }
}

navAnimation ();