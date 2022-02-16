// Elementleri Sectim
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventListeners();

function eventListeners() {
    form.addEventListener("submit", addTodo);
    secondCardBody.addEventListener("click", deleteTodo);
    secondCardBody.addEventListener("click", crossOut);
}

function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove()
    } ;
}

function crossOut(e){
    if(e.target.className === "list_box"){
        e.target.parentElement.parentElement.style.textDecoration = "line-through"
        e.target.parentElement.style.backgroundColor = "red"
    }
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "Lütfen bir to-do girin...");

    } else {
        addTodoToUI(newTodo);
        showAlert("success", "to-do elemani eklendi");


    }

    e.preventDefault();
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    //console.log(alert);
    firstCardBody.appendChild(alert);
    setTimeout(() => {
        alert.style.display = "none";
        //alert.remove()
    }, 2000)
}

function addTodoToUI(newTodo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const checkBox = document.createElement("input")
    
    checkBox.type = "checkbox"
    checkBox.id = "list_box"
    checkBox.className = "list_box"
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa fa-remove'></i>";
    


    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(checkBox);
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    

    // Todoliste list Itemi ekledim
    todoList.appendChild(listItem);
    todoInput.value = "";
}