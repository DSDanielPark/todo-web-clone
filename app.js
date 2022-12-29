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