const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");    
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //span에 newTodo를 text로 넣어서 보여줌
    const button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);    
    li.appendChild(button);    
    toDoList.appendChild(li);
}

function handleToDoSumit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    //toDos 배열(array)에 input 값을 넣어쥼
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSumit);

// function sayHello(){
//     console.log("hello");
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //localStorage안에 저장된 input값이 빈값이 아닐경우 변수 parsedToDos가 만들어짐
    //savedToDos가 javascript가 이해 할 수 있는 객체로 만듬
    toDos = parsedToDos;

    // parsedToDos.array.forEach(sayHello); 이걸 밑에 방식으로 쓸 수 있음 함수 안만들어도됨
    parsedToDos.forEach(paintToDo);
}