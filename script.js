/* POP OUT MENU FUNCTION */

const menuBtn = document.querySelector('.menu_btn');
const osMenuBtn = document.querySelector('.os_menu_btn');
const osMenu = document.querySelector('.os_menu');

const toggleMenu = () => {
    const menuHeight = parseInt(getComputedStyle(osMenu).height, 10);
    const currentTop = parseInt(getComputedStyle(osMenu).top, 10);

    if (currentTop < 0) {
        osMenu.style.top = '0';
        menuBtn.classList.add('active');
    } else {
        osMenu.style.top = `-${menuHeight}px`;
        menuBtn.classList.remove('active');
    }
};

menuBtn.addEventListener('click', toggleMenu);
osMenuBtn.addEventListener('click', toggleMenu);

/* BACK TO TOP FUNCTION */

const backToTop = document.querySelector('.to_top');

backToTop.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
};

