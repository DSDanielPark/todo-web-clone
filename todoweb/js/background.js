const images = ["1.png", "2.png", "0.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// JavaScript를 통해 body에 <img src="img/0.png">를 랜덤으로 삽입해줌
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage)


// 버튼 클릭하면 랜덤으로 색 조합되서 body.background.color변하게 하기
// https://blog.idrisolubisi.com/how-to-create-beautiful-gradients-with-javascript
// import "/src/index.js";

// const colors = [
//   "#ef5777",
//   "#575fcf",
//   "#4bcffa",
//   "#34e7e4",
//   "#0be881",
//   "#f53b57",
//   "#3c40c6",
//   "#0fbcf9",
//   "#00d8d6",
//   "#05c46b",
//   "#ffc048",
//   "#ffdd59",
//   "#ff5e57",
//   "#d2dae2",
//   "#485460",
//   "#ffa801",
//   "#ffd32a",
//   "#ff3f34"
// ];

// const giveMeBtn = document.querySelector("button");
// var css = document.querySelector("h4");

// function clickGiveMeBtn() {
//   const color1 = colors[Math.floor(Math.random() * colors.length)];
//   const color2 = colors[Math.floor(Math.random() * colors.length)];

//   document.body.style.background =
//     "linear-gradient: " + color1 + ", " + color2 + ")";
//   css.textContent = document.body.style.background + ";";
// }

// giveMeBtn.addEventListener("click", clickGiveMeBtn);




// const colors = [
//     "#ef5777",
//     "#575fcf",
//     "#4bcffa",
//     "#34e7e4",
//     "#0be881",
//     "#f53b57",
//     "#3c40c6",
//     "#0fbcf9",
//     "#00d8d6",
//     "#05c46b",
//     "#ffc048",
//     "#ffdd59",
//     "#ff5e57",
//     "#d2dae2",
//     "#485460",
//     "#ffa801",
//     "#ffd32a",
//     "#ff3f34"
//   ];
//   const button = document.querySelector("button");
  
//   function gradientColor() {
//     const right = colors[Math.floor(Math.random() * colors.length)];
//     const left = colors[Math.floor(Math.random() * colors.length)];
  
//     document.body.style.background = `linear-gradient(to left, ${right}, ${left} )`;
//   }
  
//   button.addEventListener("click", gradientColor);
  