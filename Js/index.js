let icon = document.querySelector(".icon");
let header = document.querySelector(".header");

icon.addEventListener("click",() => {
    header.classList.toggle("active");
    // alert("kyu??")
})

let login = document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".log-in").style.display = "flex";
})

let close = document.querySelector(".log-in-close").addEventListener("click", () => {
    document.querySelector(".log-in").style.display = "none";
})

