/* POP OUT MENU FUNCTION */

const menuBtn = document.querySelector('.menu_btn');
const osMenuBtn = document.querySelector('.os_menu_btn');
const osMenu = document.querySelector('.os_menu');

const toggleMenu = () => {
    // Recalculate menu height dynamically
    const menuHeight = parseInt(getComputedStyle(osMenu).height, 10);
    const currentTop = parseInt(getComputedStyle(osMenu).top, 10);

    if (currentTop < 0) {
        osMenu.style.top = '0'; // Show menu
        menuBtn.classList.add('active');
    } else {
        osMenu.style.top = `-${menuHeight}px`; // Hide menu
        menuBtn.classList.remove('active');
    }
};

// Add separate event listeners as in the original code
menuBtn.addEventListener('click', toggleMenu);
osMenuBtn.addEventListener('click', toggleMenu);


/* BACK TO TOP FUNCTION */

const backToTop = document.querySelector('.to_top');

if (backToTop) {
    backToTop.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
    }
};

/* SCROLL ONLY MENU BUTTON */

document.addEventListener('scroll', function() {
    if (window.innerWidth >= 768) {
        if (window.scrollY > 100) {
            menuBtn.style.display = 'block';
        } else {
            menuBtn.style.display = 'none'
        }
    }
});

