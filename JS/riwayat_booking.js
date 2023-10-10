function riwayat() {
    const ls = localStorage.getItem('booking')
    const data = JSON.parse(ls)
    var email = document.getElementById("email")
    fetch("https://be-jayapura-27-production.up.railway.app/riwayat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.value,
            })
        // .then(function (response) {
        //     if (response.ok) {
        //         return response.json();
        //     }
        //     return Promise.reject(response);
            .then(response => response.json())
            .then(data => {
            const bodyElement = document.querySelector('.home');
            bodyElement.querySelectorId('nama').textContent = data.nama;
            bodyElement.querySelectorId('noHP').textContent = data.numPhone;
            bodyElement.querySelectorId('email').textContent = data.email;
            bodyElement.querySelectorId('service').textContent = data.services;
            bodyElement.querySelectorId('note').textContent = data.note;
            bodyElement.querySelectoId('date').textContent = data.date;
        })
        }).then(function (data) {
            alert(data.message);
            if (confirm(data.message)) {
                window.location.replace("https://be-jayapura-27-production.up.railway.app/riwayat_booking.html")
            }
        }).catch(function (error) {
            console.log(error);
        })
}

document.addEventListener('DOMContentLoaded', riwayat);