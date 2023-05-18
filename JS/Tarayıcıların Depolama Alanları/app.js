// // Session Storage - Key ve Value

// // Butonlar

// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// // İnputlar

// const addkey = document.querySelector("#addkey");
// const addvalue = document.querySelector("#addvalue");
// const deletekey = document.querySelector("#deletekey");

// add.addEventListener("click", addItem);
// del.addEventListener("click", delItem);
// clear.addEventListener("click", clearItem);

// function addItem(e) {
//     sessionStorage.setItem(addkey.value, addvalue.value);
// }

// function delItem(e) {
//     sessionStorage.removeItem(deletekey.value);
// }

// function clearItem(e) {
//     sessionStorage.clear();
// }

// // Local Storage

// SetItem

// localStorage.setItem("Hareet", "burqee")

// Get Item

// const value = localStorage.getItem("item");
// consol.log(typeof value)
// console.log(value)

// Clear Local Stroge

// localStorage.clear();

// console.log(localStorage.getItem("ads"))

// if (localStorage.getItem("hareket") === null) {
//     console.log("sdf")
// }
// else {
//     console.log("wasdwa")
// }

// Local Stroge - Array Yazma

// const todos = ["todo1", "todo2", "todo3"];

// localStorage.setItem("todos", todos);






























// const todoForm = document.querySelector('#todo-form');
// const todoForm2 = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo');
// const todoList = document.querySelector('.list-group');
// const filter = document.querySelector('#filter');
// const clearBtn = document.querySelector('#clear-todos');
// const xmark = document.querySelector("fa-solid")



// loadEventListeners();



// function loadEventListeners() {
//     todoForm.addEventListener('submit', addTodo);
//     todoList.addEventListener('click', deleteTodo);
//     clearBtn.addEventListener('click', clearTodos);
//     filter.addEventListener('input', filterTodos);
// }



// function addTodo(e) {
//     if (todoInput.value === '') {
//         alert('Lütfen bir todo girin');
//     } else {
//         const li = document.createElement('li');
//         li.className = 'list-group-item';
//         li.appendChild(document.createTextNode(todoInput.value));
//         const link = document.createElement('a');
//         link.className = 'delete-item';
//         link.innerHTML = '<i class="fa-solid fa-rocket"></i>';
//         li.appendChild(link);

//         todoList.appendChild(li);

//         todoInput.value = '';
//     }
// }

// function filterTodos(e) {
//     const text = e.target.value.toLowerCase();
//     document.querySelectorAll('.list-group li').forEach(function (todo) {
//         const item = todo.firstChild.textContent.toLowerCase();
//         console.log(item, todo.firstChild, item.includes(text))
//         if (item.includes(text)) {
//             todo.style.display = 'block';
//         } else {
//             todo.style.display = 'none';
//         }
//     });
// }



// function deleteTodo(e) {
//     if (confirm('Silmek istediğinizden emin misin?')) {
//         e.target.parentElement.parentElement.remove();
//     }
// }




// function clearTodos() {
//     if (confirm('Hepsini silmek istediğinizden emin misin?')) {
//         todoList.innerHTML = '';
//     }
// }

