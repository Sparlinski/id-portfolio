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

/* VIDEO AUTO PLAY FUNCTION */

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('project_vid');

    const playVid = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && video.paused) {
                video.play();
            }
        });
    });

    playVid.observe(video);
});

