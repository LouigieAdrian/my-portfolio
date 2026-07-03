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


const fills = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const bar = entry.target;
const width = bar.getAttribute("data-width");
bar.style.width = width;

}

});

}, { threshold: 0.3 });

fills.forEach(fill => {
skillObserver.observe(fill);
});

const navLinks = document.querySelectorAll(".nav-link");
const sectionsTrack = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sectionsTrack.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if(window.scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});
