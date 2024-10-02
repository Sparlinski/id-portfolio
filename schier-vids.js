document.addEventListener("DOMContentLoaded", () => {
    const videoSchier = document.getElementById('project_vid_schier');

    const playVidSchier = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && videoSchier.paused) {
                videoSchier.play();
            }
        });
    });

    playVidSchier.observe(videoSchier);
});