console.log("Witajcie wszyscy zaglądający tu developerzy! Oto stronka CV na zamówienie!")

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("body--dark") ?
        "jasny" :
        "ciemny";
});