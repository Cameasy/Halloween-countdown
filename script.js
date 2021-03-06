const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const title = document.getElementsByTagName("h1")[0];

const currYear = new Date().getFullYear();
const halloween = `31 Oct ${currYear}`;
title.innerHTML = `Halloween ${currYear}`;

function countdown(){
    const halloweenDate = new Date(halloween);
    const currentDate = new Date();

    const totalSeconds = (halloweenDate - currentDate) / 1000;
    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) %24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML= days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
