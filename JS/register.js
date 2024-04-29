var users = getUsersFromLocalStorage();
function validateForm() {
    var email = document.forms["Resform"]["email"].value;
    var password = document.forms["Resform"]["password"].value;
    var password2 = document.forms["Resform"]["password2"].value;
    var phoneNumber = document.forms["Resform"]["phonenumber"].value;

    if (email === "" || email === null) {
        alert("Email must be filled out");
        return false;
    }

    if (password === "" || password === null) {
        alert("Password must be filled out");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password !== password2) {
        alert("The passwords do not match");
        return false;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        alert("Please enter a valid phone number");
        return false;
    }

    if (isEmailUsed(users, email)) {
        alert("Please use another email");
        return false;
    }

    register(email, password);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    var phoneNumberRegex = /^01\d{9}$/;
    return phoneNumberRegex.test(phoneNumber);
}

function register(email, password) {

    var user = { email: email, password: password };
    users.push(user);
    saveUsersToLocalStorage(users);

    var form = document.getElementById('Resform');
    form.action = (email === "cinematime@gmail.com") ? "admin.html" : "Homepage.html";
}

function getUsersFromLocalStorage() {
    var users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

function saveUsersToLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function isEmailUsed(users, email) {
    return users.some(function (user) {
        return user.email === email;
    });
}
