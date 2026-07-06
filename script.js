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

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".nav-link").forEach(link => {

link.addEventListener("click", () => {

hamburger.classList.remove("active");
navMenu.classList.remove("active");

});

});

const roles = [

"💻 IT Support Specialist",

"🌐 Network Engineer",

"📊 Power BI Developer",

"🖥️ System Administrator",

"🔒 IT Infrastructure Engineer"

];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const current = roles[roleIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);
if(charIndex > current.length){
deleting = true;
setTimeout(typeEffect,1200);
return;
}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){
deleting = false;
roleIndex = (roleIndex + 1) % roles.length;
}

}

setTimeout(typeEffect,deleting ? 45 : 90);

}

typeEffect();

particlesJS("particles-js", {

particles:{

number:{
value:70,
density:{
enable:true,
value_area:900
}
},

color:{
value:"#38bdf8"
},

shape:{
type:"circle"
},

opacity:{
value:0.5
},

size:{
value:3,
random:true
},

line_linked:{
enable:true,
distance:150,
color:"#38bdf8",
opacity:0.3,
width:1
},

move:{
enable:true,
speed:2
}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
}

},

modes:{

grab:{
distance:180,
line_linked:{
opacity:0.8
}
},

push:{
particles_nb:4
}

}

},

retina_detect:true

});


const projectImages = document.querySelectorAll(".project-image");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

projectImages.forEach(image => {

image.addEventListener("click", () => {

lightbox.classList.add("active");

lightboxImg.src = image.src;

});

});

closeBtn.addEventListener("click", () => {

lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

if(e.target === lightbox){

lightbox.classList.remove("active");

}

});
