// typing animation
const text = ["Application Support Engineer","Future Cloud Engineer","AI & DevOps Enthusiast"];
let i=0,j=0,current="",isDeleting=false;

function type(){
current=text[i];
document.getElementById("typing").textContent=current.substring(0,j);

if(!isDeleting && j<current.length){j++;setTimeout(type,80);}
else if(isDeleting && j>0){j--;setTimeout(type,40);}
else{
isDeleting=!isDeleting;
if(!isDeleting){i=(i+1)%text.length;}
setTimeout(type,900);
}}
type();

function scrollToSection(){
document.getElementById("about").scrollIntoView({behavior:"smooth"});
}

// reveal on scroll
window.addEventListener("scroll",reveal);

function reveal(){
let reveals=document.querySelectorAll(".reveal");
for(let i=0;i<reveals.length;i++){
let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let elementVisible=80;

if(elementTop<windowHeight-elementVisible){
reveals[i].classList.add("active");
}
}
}

// parallax bg
window.addEventListener("scroll",()=>{
let value=window.scrollY;
document.querySelector(".bg").style.transform="translateY("+value*0.3+"px)";
});
