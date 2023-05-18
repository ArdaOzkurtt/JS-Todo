
// --------------------------------------------------------------------------------------------------------------------



const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body");
const secondCardBody = document.querySelector(".cardbodu2");
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


wasda()

function wasda() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

function addTodo(e) {
    newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo girin...");
    }
    else {
        addTodoUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Başarılı");
    }

    e.preventDefault();
}

function addTodoUI(newTodo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    setTimeout(function () {
        alert.remove();
    }, 500);
}


// --------------------------------------------------------------------------------------------------------------------

// local ekleme

function addTodoToStorage(newTodo) {
    let todos = asd();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function asd() {
    let todos;

    if (localStorage.getItem("todos") === null || localStorage.getItem("todos") === "") {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}



function loadAllTodosToUI() {
    let todos = asd();
    todos.forEach(function (todo) {
        addTodoUI(todo);
    })
}





// Silme

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
        showAlert("success", "Silindi");
    }
}

// local silme

function deleteTodoFromStorage(deletetodo) {
    let todos = asd();

    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

// filter

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach(function (listItems) {
        const text = listItems.textContent.toLocaleLowerCase();
        if (text.indexOf(filterValue) === -1) {
            listItems.setAttribute("style", "display : none !important");
        }
        else {
            listItems.setAttribute("style", "display : block");
        }
    });
}

function clearAllTodos(e) {
    if (confirm("Silincek")) {
        // todoList.innerHTML = "";
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos")
    }
}