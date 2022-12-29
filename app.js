// let val = 2
// const val2 = 2.2
// console.log(typeof val == typeof val2)
// console.log(typeof 'hello')

// const val3 = 'hello'
// const val4 = "hello"
// console.log(typeof val3 == typeof val4)

// const sample = [1,2,3,4]
// console.log(sample[1])

// val = 5


// const title = document.getElementById("title")

// // console.dir(title)

// title.innerText = 'got you!';

// console.log(title.id);
// console.log(title.className);


// const his = document.getElementsByClassName("hi");

// console.log(his);



// const movie = document.getElementsByTagName("h1");

// console.log(movie);


// const movie = document.querySelector(".movie h1")

// console.log(movie.innerText)



const title = document.querySelector(".movie");
const first_h1 = document.querySelector(".movie:first-child h1");

console.log(title);
console.log(first_h1);

// first_h1.style.color = 'blue';


function handleTitleClick(){
    first_h1.style.color = 'blue';
}

// first_h1.addEventListener("click", handleTitleClick)
first_h1.onclick = handleTitleClick;

function handleMouseEnter(){
    console.log("mouse is here");
}


function handleMouseLeave(){
    console.log("mouse is gone!");
}


// first_h1.addEventListener("mouseenter", handleMouseEnter);
first_h1.onmouseenter = handleMouseEnter;
// first_h1.addEventListener("mouseleave", handleMouseLeave);
first_h1.onmouseleave = handleMouseLeave;


function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}


window.addEventListener("resize", handleWindowResize);



function handleWindowCopy {
    alert("copier!!!");
}

window.addEventListener("copy", handleWindowCopy)



// // 1st 정리과제
// // <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// // <⚠️ /DONT DELETE THIS ⚠️>

// /*
// ✅ The text of the title should change when the mouse is on top of it.
// ✅ The text of the title should change when the mouse is leaves it.
// ✅ When the window is resized the title should change.
// ✅ On right click the title should also change.
// ✅ The colors of the title should come from a color from the colors array.
// ✅ DO NOT CHANGE .css, or .html files.
// ✅ ALL function handlers should be INSIDE of "superEventHandler"
// */

// const h2 = document.querySelector("h2");
// // console.dir(h2);

// const superEventHandler = {
//   enter: function (handleMouseEnter) {
//     h2.style.color = colors[1];
//     h2.innerText = "The mouse is here!!";
//   },
//   resize: function (handleWindowResize) {
//     h2.innerText = "You just resized!!";
//     h2.style.color = colors[2];
//   },
//   leave: function (handleMouseEnter) {
//     h2.innerText = "Mouse is gone!!";
//     h2.style.color = colors[3];
//   },
//   rightclick: function (handleContextMenu) {
//     h2.innerText = "That was right click!!";
//     h2.style.color = colors[4];
//   }
// };

// h2.addEventListener("mouseenter", superEventHandler.enter);
// h2.addEventListener("mouseleave", superEventHandler.leave);
// window.addEventListener("contextmenu", superEventHandler.rightclick);
// window.addEventListener("resize", superEventHandler.resize);
