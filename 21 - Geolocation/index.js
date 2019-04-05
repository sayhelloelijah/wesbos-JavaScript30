document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector('.arrow');
    const speed = document.querySelector('.speed-value');

    navigator.geolocation.watchPosition((data) => {
        console.log(data);
        speed.textContent = data.coords.speed;
        arrow.style.transform = `rotate(${data.coords.heading})`;
    }, (err) => {
        console.error(`OH NO!: ${err.message}`)
    });
});