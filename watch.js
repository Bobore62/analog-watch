const hour = document.querySelector('[data-hour]');
const minutes = document.querySelector('[data-minute]');
const seconds = document.querySelector('[data-sec]');

setInterval(setClock,1000);
const song = song = new Audio('clock-ticking-2_20.mp3');
song.play();
function setClock() {
    let currentDate = new Date;
    let secs = currentDate.getSeconds() /60;
    let min = (secs + currentDate.getMinutes()) /60;
    let hours = (min + currentDate.getHours()) /12;

    setRotation(seconds, secs);
    setRotation(minutes, min);
    setRotation(hour, hours);
    song.play();
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation',rotation * 360+'deg');
}
setClock();
