const clock = document.querySelector("h2#clock");

// clock.innerText = "clock!!!!!!!!!!" 테스트

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minute}:${seconds}`
}

// 5000ms == 5s
getClock()
setInterval(getClock, 1000)


