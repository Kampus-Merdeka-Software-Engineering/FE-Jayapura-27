var btn = document.getElementById("buttonRegister")
var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")

btn.addEventListener("click", registrasi)

function registrasi() {
    fetch("https://be-jayapura-27-production.up.railway.app/registrasi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.value,
                email: email.value,
                password: password.value,
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
                window.location.replace("https://be-jayapura-27-production.up.railway.app/login.html")
            }
        }).catch(function (error) {
            console.log(error);
        })
    }