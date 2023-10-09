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

function fetchHeaderData() {
  fetch('https://be-jayapura-27-production.up.railway.app/')
      .then(response => response.json())
      .then(data => {
          const headerElement = document.querySelector('header .header-text');
          headerElement.querySelector('h1').textContent = data.title;
          headerElement.querySelector('p').textContent = data.description;
      })
      .catch(error => console.error('Error fetching header data:', error));
}

// Post data dari contact form
function postContactFormData(event) {
  event.preventDefault();

  // Ambil data dari form
  const form = event.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;

  // Buat objek data
  const data = {
      name: name,
      email: email,
      message: message
  };

  // Kirim data sebagai JSON
  fetch('https://api-express-railway-production.up.railway.app/contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Terima kasih! Pesan Anda telah terkirim.');
          form.reset();
      } else {
          alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
      }
  })
  .catch(error => console.error('Error sending contact data:', error));
}


// Event listener untuk form submission
document.querySelector('.contact-form form').addEventListener('submit', postContactFormData);

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchHeaderData);

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