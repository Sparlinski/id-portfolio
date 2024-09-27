const menuBtn = document.querySelector('.menu_btn');
const osMenuBtn = document.querySelector('.os_menu_btn');
const osMenu = document.querySelector('.os_menu');

const toggleMenu = () => {
    const menuHeight = parseInt(getComputedStyle(osMenu).height, 10);
    const currentTop = parseInt(getComputedStyle(osMenu).top, 10);

    if (currentTop < 0) {
        // Open the menu
        osMenu.style.top = '0';
        menuBtn.classList.add('active');
    } else {
        // Close the menu
        osMenu.style.top = `-${menuHeight}px`;
        menuBtn.classList.remove('active');
    }
};

// Event listener for opening/closing the menu
menuBtn.addEventListener('click', toggleMenu);
osMenuBtn.addEventListener('click', toggleMenu);



