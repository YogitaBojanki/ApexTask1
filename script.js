// Typing effect on home page
const typingText = "Full Stack Web Developer Intern";
let i = 0;

function typeEffect(){
  if(document.getElementById("typing")){
    if(i < typingText.length){
      document.getElementById("typing").innerHTML += typingText.charAt(i);
      i++;
      setTimeout(typeEffect,80);
    }
  }
}
typeEffect();

const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if(link.href === window.location.href){
    link.style.color = "#00c6ff";
    link.style.fontWeight = "bold";
  }
});