const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const ToDoInput = document.querySelector("#todo-form input"); 바로 윗 줄과 동일
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
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
    paintToDO(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSumit)