


// Event Listeners ve Event Objesi kullanma.
// ----------------------------------------------------------------------------------------------------------------------

// keyDown

// document.addEventListener("keydown", run);

// function run(e) {
//     console.log(e.which)
//     console.log(e.key)
// }

// KeyPress

// document.addEventListener("keypress", run);

// function run(e) {
//     console.log(e.which)
//     console.log(e.key)
// }

// KeyUp

// document.addEventListener("keyup", run);

// function run(e) {
//     console.log(e.which)
//     console.log(e.key)
// }

// const header = document.querySelector(".card-header");
// const input = document.querySelector("#todo");

// input.addEventListener("keyup", wasd);

// function wasd(e) {
//     header.textContent = e.target.value;
//     console.log(e.target.value);
// }

// Keyboard Eventleri - KeyUp, KeyPress, keyDown.
// ----------------------------------------------------------------------------------------------------------------------

// const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title")

// Click Eventi

title.addEventListener("click", run);

function run(e) {
    console.log(e.type);
}

// Double Click Eventi

// title.addEventListener("dblclick", run);

// function run(e) {
//     console.log(e.type);
// }

// Mause Down

// title.addEventListener("mausedown", run);

// function run(e) {
//     console.log(e.type);
// }

// Mause Up

// title.addEventListener("mauseup", run);

// function run(e) {
//     console.log(e.type);
// }

// Mause Over

// title.addEventListener("mauseover", run);

// function run(e) {
//     console.log(e.type);
// }

// Mause Out

// title.addEventListener("mauseout", run);

// function run(e) {
//     console.log(e.type);
// }

// Mause Enter / Mause Leave

// Mause Eventleri.
// ----------------------------------------------------------------------------------------------------------------------

// const filter = document.getElementById("filter");

// Focus

// filter.addEventListener("focus", run)
// filter.addEventListener("blur", run)

// function run(e) {
//     console.log(e.type)
// }

// Paste

// filter.addEventListener("paste", run)

// function run(e) {
//     console.log(e.type)
// }

// Copy

// filter.addEventListener("copy", run)

// function run(e) {
//     console.log(e.type)
// }

// Cut

// filter.addEventListener("cut", run)

// function run(e) {
//     console.log(e.type)
// }

// Select

// filter.addEventListener("select", run)

// function run(e) {
//     console.log(e.type)
// }

// ----------------------------------------------------------

// document.addEventListener("DOMContentLoaded", load);

// function load(e){
//     console.log("Sayfa Yüklendi");
// }

// İnput Eventleri
// ----------------------------------------------------------------------------------------------------------------------

// Bubbling

// document.querySelector(".container").addEventListener("click", wasd)

// function wasd(e) {
//     console.log("Div Container")
// }

// document.querySelector(".card-row").addEventListener("click", wasd)

// function wasd(e) {
//     console.log("Div Container")
// }

// document.querySelector(".card-body").addEventListener("click", wasd)

// function wasd(e) {
//     console.log("Div Container")
// }

// Event Capturing veya Delegation

// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("click", wasd);

// function wasd(e) {
//     console.log(e.target)
// }

// Event Capturing ve Bubbling Olaları.
// ----------------------------------------------------------------------------------------------------------------------