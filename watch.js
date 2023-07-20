const hour = document.querySelector('[data-hour]');
const minutes = document.querySelector('[data-minute]');
const seconds = document.querySelector('[data-sec]');

setInterval(setClock,1000);

function setClock() {
    let currentDate = new Date;
    let secs = currentDate.getSeconds() /60;
    let min = (secs + currentDate.getMinutes()) /60;
    let hours = (min + currentDate.getHours()) /12;

    setRotation(seconds, secs);
    setRotation(minutes, min);
    setRotation(hour, hours);
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotation',rotation * 360+'deg');
}
setClock();