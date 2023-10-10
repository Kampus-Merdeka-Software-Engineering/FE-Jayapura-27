var btn = document.getElementById("buttonLogin")
var username = document.getElementById("username")
var password = document.getElementById("password")


btn.addEventListener("click", login);
    
        function login() {
            fetch("https://be-jayapura-27-production.up.railway.app/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username.value,
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
                  localStorage.setItem("users", JSON.stringify(data.data));
                  // Fetch the email from the API response
                  var email = data.email;
                  localStorage.setItem("email", email); // Store the email in localStorage
                  window.location.replace("https://be-jayapura-27-production.up.railway.app/home");
              }).catch(function (error) {
                    console.log(error);
                });
            }    
                