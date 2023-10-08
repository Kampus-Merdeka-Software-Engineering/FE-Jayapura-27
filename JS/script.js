let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// let lgn = document.getElementById("login");
// let rgt = document.getElementById("register");
// let btnlogreg = document.getElementById("btnlogreg");

// function login() {
//   lgn.style.left = "50px";
//   rgt.style.left = "450px";
//   btnlogreg.style.left = "0px";
// }
// function register() {
//   lgn.style.left = "-400px";
//   rgt.style.left = "50px";
//   btnlogreg.style.left = "110px";
// }

// function formLogin() {
//   document.getElementById("myPopup") .style.display = "block";
// }
// function CloseformLogin() {
//   document.getElementById("myPopup") .style.display = "none";
// }
// function CloseformRegister() {
//   document.getElementById("myPopup") .style.display = "none";
//   document.getElementById("myRegister") .style.display = "none"
// }
// function formRegister() {
// document.getElementById("myRegister") .style.display = "block";
// }

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);