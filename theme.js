const toggle = document.getElementById("theme-toggle");
const body = document.body;

let theme = localStorage.getItem("theme");

if(theme){
document.documentElement.setAttribute("data-theme", theme);
}

toggle.addEventListener("click", () => {

let current = document.documentElement.getAttribute("data-theme");

if(current === "dark"){
document.documentElement.removeAttribute("data-theme");
localStorage.setItem("theme", "light");
}
else{
document.documentElement.setAttribute("data-theme","dark");
localStorage.setItem("theme","dark");
}

});