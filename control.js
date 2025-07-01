const video = document.getElementById("video-player");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeSlider = document.getElementById("volume");
const speedSlider = document.getElementById("speed");
const progressSlider = document.getElementById("progress");
const captureBtn = document.getElementById("capture");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let videoList = ["videos/Cielo.mp4", "videos/Scorpions.mp4"];
let currentVideoIndex = 0;

// Reproducir/Pausar
playBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Mute
muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
});

// Ajustar volumen
volumeSlider.addEventListener("input", () => {
    video.volume = volumeSlider.value;
});

// Ajustar velocidad
speedSlider.addEventListener("input", () => {
    video.playbackRate = speedSlider.value;
});

// Capturar imagen del video
captureBtn.addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    let img = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.href = img;
    link.download = "captura.png";
    link.click();
});

// Cambiar video
nextBtn.addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
    video.src = videoList[currentVideoIndex];
    video.play();
});

prevBtn.addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex - 1 + videoList.length) % videoList.length;
    video.src = videoList[currentVideoIndex];
    video.play();
});