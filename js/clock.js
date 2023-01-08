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


// CountDownTimer("12/24/2023 12:00 AM", ".js-clock");

// function CountDownTimer(dt, id) {
//   var end = new Date(dt);
//   var _second = 1000;
//   var _minute = _second * 60;
//   var _hour = _minute * 60;
//   var _day = _hour * 24;
//   var timer;

//   function showRemaining() {
//     var now = new Date();
//     var distance = end - now;
//     if (distance < 0) {
//       clearInterval(timer);
//       document.querySelector(id).innerText = "EXPIRED!";
//       return;
//     }

//     const date = new Date();
//     if (Number(date.getSeconds()) % 2 === 1) {
//       document.body.style.color = "white";
//     } else {
//       document.body.style.color = "black";
//     }

//     var days = Math.floor(distance / _day);
//     var hours = Math.floor((distance % _day) / _hour);
//     var minutes = Math.floor((distance % _hour) / _minute);
//     var seconds = Math.floor((distance % _minute) / _second);

//     document.querySelector(id).innerText = days + "days  ";
//     document.querySelector(id).innerText += hours + "hrs  ";
//     document.querySelector(id).innerText += minutes + "mins  ";
//     document.querySelector(id).innerText += seconds + "secs";
//   }

//   timer = setInterval(showRemaining, 1000);
// }
