const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// check saved theme
if(localStorage.getItem("theme") === "light"){
body.classList.add("light-mode");
toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {

body.classList.toggle("light-mode");

if(body.classList.contains("light-mode")){
toggleBtn.textContent = "☀️";
localStorage.setItem("theme", "light");
}else{
toggleBtn.textContent = "🌙";
localStorage.setItem("theme", "dark");
}

});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

}, {
threshold: 0.15
});

sections.forEach(section => {
observer.observe(section);
});
