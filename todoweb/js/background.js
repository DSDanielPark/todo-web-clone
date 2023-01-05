const images = ["1.png", "2.png", "0.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// JavaScript를 통해 body에 <img src="img/0.png">를 랜덤으로 삽입해줌
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage)

