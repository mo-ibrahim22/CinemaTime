function validateForm() {
    var email = document.forms["loginform"]["email"].value;
    var password = document.forms["loginform"]["password"].value;

    if (email === "" || email === null) {
        alert("Email must be filled out");
        return false;
    }

    if (password === "" || password === null) {
        alert("Password must be filled out");
        return false;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address");
        return false;
    }

    login();
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = { email: email, password: password };
    var users = JSON.parse(localStorage.getItem("users"));

    if (users && users.length > 0) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === user.email && users[i].password === user.password) {
                if (users[i].email === "cinematime@gmail.com") {
                    document.getElementById('loginform').action = "admin.html";
                } else {
                    document.getElementById('loginform').action = "Homepage.html";
                }
                return;
            }
        }
    }

    alert("Invalid email or password");
}
