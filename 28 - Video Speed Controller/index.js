document.addEventListener('DOMContentLoaded', () => {
    const speed = document.querySelector('.speed');
    const bar = document.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

    function handleMove(e) {
        const y = e.pageY - this.offsetTop;
        const percent = y / this.offsetHeight;
        const min = 0.4;
        const max = 6.0;
        const height = Math.round(percent * 100) + '%';
        const playbackRate = percent * (max - min) + min;

        bar.style.height = height;
        bar.textContent = playbackRate.toFixed(2) + 'x';
        video.playbackRate = playbackRate;
    }

    speed.addEventListener('mousemove', handleMove);
    speed.addEventListener('touchmove', handleMove);
});