const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const ToDoInput = document.querySelector("#todo-form input"); 바로 윗 줄과 동일
const toDoList = document.getElementById("todo-list");

function paintToDO(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    console.log(li);
    toDoList.appendChild(li);
    
}



function handleToDoSumit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    
    toDoInput.value = "";
    paintToDO(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSumit)