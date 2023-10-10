var btn = document.getElementById("buttonLogin")
var username = document.getElementById("username")
var password = document.getElementById("password")
var email = data.email;

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
                  localStorage.setItem("email", "hehe@gmail.com"); // Store the email in localStorage
                  window.location.replace("https://be-jayapura-27-production.up.railway.app/home.html");
              }).catch(function (error) {
                    console.log(error);
                });
            }
            
          // function myButton(){
          //     var btnLogin = document.getElementById("buttonLogin").value;
          //     var username = document.getElementById("username").value;
          //     var password = document.getElementById("password").value;
                
          //     if (username === "" || password === "") {
          //       swal({
          //         title: "Error!",
          //         text: "Please fill in all data first!",
          //         icon: "warning",
          //         button: "Ok",
          //       });
          //     } else {
          //         swal({
          //           title: "Susccessfully Submitted!",
          //           text: "Your data has been entered successfully",
          //           icon: "success",
          //           button: "Ok",
          //         });
          //       }
          //     }
                