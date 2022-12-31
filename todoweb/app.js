const loginForm = document.getElementById("login-form")
// const loginForm = document.querySelector("#login-form") 동일하다

const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");

const loginButton = loginForm.querySelector("button");
// const loginButton = document.querySelector("#login-form button");


// ########################### 1. js의 form안에 input으로 valid하기 vs js function으로 valid하기
// function onLoginBtnClick () {
//     loginInput.value = "from app.js"
//     console.dir(loginInput);
//     console.log("login btn clicked!!");
// }


// function onLoginBtnClick () {
//     const username = loginInput.value;
//     console.log(username);
//     if (username === ""){
//         alert("please write your name");
//     } else if (username.length > 15){
//         alert("your name is too long. plase under 15");
//     }
// }


// loginButton.addEventListener("click", onLoginBtnClick);



// ########################### 2. onLoginSubmit 및 eventListener 생성해주기

// enter나 클릭해주면 submit해준다.
function onLoginSubmit(whatisthis) {
    whatisthis.preventDefault();
    console.log(whatisthis);
    
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
