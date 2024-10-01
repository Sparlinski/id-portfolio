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

/* VIDEO AUTO PLAY FUNCTION */

document.addEventListener("DOMContentLoaded", () => {
    const videoCut = document.getElementById('project_vid_cut');

    const playVidCut = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && videoCut.paused) {
                videoCut.play();
            }
        });
    });

    playVidCut.observe(videoCut);
});

document.addEventListener("DOMContentLoaded", () => {
    const videoGrind = document.getElementById('project_vid_grind');

    const playVidGrind = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && videoGrind.paused) {
                videoGrind.play();
            }
        });
    });

    playVidGrind.observe(videoGrind);
});

document.addEventListener("DOMContentLoaded", () => {
    const videoWeld = document.getElementById('project_vid_weld');

    const playVidWeld = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && videoWeld.paused) {
                videoWeld.play();
            }
        });
    });

    playVidWeld.observe(videoWeld);
});

/* Detailed Explanation
document.addEventListener("DOMContentLoaded", () => {...});

This line adds an event listener to the document. The "DOMContentLoaded" event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This ensures that your JavaScript runs only after the HTML elements are ready, preventing errors related to accessing elements that might not exist yet.

const video = document.getElementById('myVideo');

This line selects the <video> element from the HTML document using its ID (myVideo) and assigns it to the variable video. This allows you to easily reference the video element later in the code.

const observer = new IntersectionObserver((entries) => {...});

Here, you create a new instance of the IntersectionObserver class. This class allows you to observe changes in the intersection of a target element (in this case, the video) with an ancestor element or with a top-level document's viewport.
The entries parameter is an array of IntersectionObserverEntry objects, which represent the elements being observed. Each entry contains information about the visibility of the observed element.

entries.forEach(entry => {...});

This line iterates over each entry in the entries array. Each entry corresponds to an observed element (the video in this case).

if (entry.isIntersecting && video.paused) {...}

Inside the loop, you check two conditions:
entry.isIntersecting: This property is true if the video element is currently intersecting (visible) within the viewport.
video.paused: This property is true if the video is currently paused. This prevents the video from being played multiple times if it comes into view again while already playing.

video.play();

If both conditions are met (the video is in view and is currently paused), this line triggers the video to play.

observer.observe(video);

Finally, this line tells the IntersectionObserver instance to start observing the video element. The observer will now watch for any intersection changes for this specific element.

Summary
In summary, this JavaScript code allows the video to play automatically when it comes into the viewport, using the Intersection Observer API. It efficiently checks the visibility of the video and ensures that it only plays if it is not already playing. This approach is effective for managing resource usage, as it avoids unnecessary playback when the video is not visible. */

