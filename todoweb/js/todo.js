const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const ToDoInput = document.querySelector("#todo-form input"); 바로 윗 줄과 동일
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"


// todo list를 local storage에 저장해서 새로고침되도 보이게
let toDos = [];


function deleteToDo(event) {
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    // console.log(li.id);
    // console.log(typeof li.id);
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    
}


function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDO(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
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
    // toDo를 구조체로 변경하기
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }

    toDos.push(newTodoObj);
    paintToDO(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumit);

const savedToDos = localStorage.getItem(TODOS_KEY);


// function sayHello(item) {
//     console.log("this is turn of ", item);
// }

console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos

    // parsedToDos.forEach((item) => console.log("thist is turn of", item));
    parsedToDos.forEach(paintToDO);
}