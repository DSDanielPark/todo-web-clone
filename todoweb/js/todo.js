const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const ToDoInput = document.querySelector("#todo-form input"); 바로 윗 줄과 동일
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"


// todo list를 local storage에 저장해서 새로고침되도 보이게
const toDos = [];


function deleteToDo(event) {
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDO(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    console.log(li);
    toDoList.appendChild(li);
}


function handleToDoSumit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDO(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY);


// function sayHello(item) {
//     console.log("this is turn of ", item);
// }

console.log(savedToDos);

if (saveToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("thist is turn of", item));
}