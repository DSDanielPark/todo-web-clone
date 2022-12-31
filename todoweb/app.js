const loginForm = document.getElementById("login-form")
// const loginForm = document.querySelector("#login-form") 동일하다

const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");

const loginButton = loginForm.querySelector("button");
// const loginButton = document.querySelector("#login-form button");


// function onLoginBtnClick () {
//     loginInput.value = "from app.js"
//     console.dir(loginInput);
//     console.log("login btn clicked!!");
// }


function onLoginBtnClick () {
    const username = loginInput.value;
    console.log(username);
    // if (username === ""){
    //     alert("please write your name");
    // } else if (username.length > 15){
    //     alert("your name is too long. plase under 15");
    // }
}


// loginButton.addEventListener("click", onLoginBtnClick);