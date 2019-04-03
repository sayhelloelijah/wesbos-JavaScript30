const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const button = document.querySelector('button');

function paintCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        pixels = ctx.getImageData(0, 0, width, height);
        pixels = chromaKey(pixels);
        // ctx.globalAlpha = 0.8;
        ctx.putImageData(pixels, 0, 0);

    }, 16)
}

function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(error => alert('OH NO!', error));
}

function takePhoto(e) {
    // play the sound
    e.preventDefault();
    snap.currentTime = 0;
    snap.play();
    // take data out of canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src=${data} alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    let counter = pixels.data.length;
    for(let i = 0; i < counter; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100;     // r
        pixels.data[i + 1] = pixels.data[i + 1] - 50;      // g
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;     // b
    }
    return pixels;
}

function rgbSplit(pixels) {
    let counter = pixels.data.length;
    for(let i = 0; i < counter; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0];     // r
        pixels.data[i + 500] = pixels.data[i + 1];     // g
        pixels.data[i - 500] = pixels.data[i + 2];     // b
    }
    return pixels;
}

function chromaKey(pixels) {
    const levels = {};
    let counter = pixels.data.length;

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for(let i = 0; i < counter; i += 4) {
        red   = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue  = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
                pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}

getVideo();
button.addEventListener('click', takePhoto);
video.addEventListener('canplay', paintCanvas);