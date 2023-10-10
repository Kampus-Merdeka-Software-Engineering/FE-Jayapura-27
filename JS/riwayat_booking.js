function riwayat() {
    const ls = localStorage.getItem('booking');
    const data = JSON.parse(ls);
    // Retrieve the email from localStorage
    var email = localStorage.getItem("email");
    fetch("https://be-jayapura-27-production.up.railway.app/riwayat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email // Send the email to the server
        })
    })
    .then(response => response.json())
    .then(data => {
        const bodyElement = document.querySelector('.home');
        bodyElement.querySelector('#nama').textContent = data.nama;
        bodyElement.querySelector('#noHP').textContent = data.numPhone;
        bodyElement.querySelector('#email').textContent = data.email;
        bodyElement.querySelector('#service').textContent = data.services;
        bodyElement.querySelector('#note').textContent = data.note;
        bodyElement.querySelector('#date').textContent = data.date;
    })
    .then(function (data) {
        alert(data.message);
        if (confirm(data.message)) {
            window.location.replace("https://be-jayapura-27-production.up.railway.app/riwayat_booking.html");
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}
document.addEventListener('DOMContentLoaded', riwayat);
