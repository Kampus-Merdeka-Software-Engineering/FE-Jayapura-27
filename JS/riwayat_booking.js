function riwayat() {
    const ls = localStorage.getItem('booking')
    const data = JSON.parse(ls)
    var email = document.getElementById("email")
    fetch("https://nodejs-production-176d.up.railway.app/riwayat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nama: nama.value,
                noHP: noHP.value,
                email: email.value,
                service: service.value
            })
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        }).then(function (data) {
            alert(data.message);
            if (confirm(data.message)) {
                window.location.replace("https://be-jayapura-27-production.up.railway.app/riwayat_booking.html")
            }
        }).catch(function (error) {
            console.log(error);
        })
    }