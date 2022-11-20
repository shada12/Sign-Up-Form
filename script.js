var validPassword = true;

function validate() {
    validateForm();
}

function validateForm() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value.toLowerCase();
    let phone = document.getElementById('phone').value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    validatePassword(password.trim(), confirmPassword.trim());
    validateFirstName(firstName.trim());
    validateLastName(lastName.trim());
    validateEmail(email.trim());
    validatePhone(phone.trim());
}

function validatePassword(password, confirmPassword) {

    const passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

    if (password === "") {
        document.getElementById("passwordAlert").innerHTML = "Password is required";
        validPassword == false;
    }
    else if (password.length < 6) {
        document.getElementById("passwordAlert").innerHTML = "Password length should be 6 or more";
        validPassword == false;
    } else if (!password.match(passwordformat)) {
        document.getElementById("passwordAlert").innerHTML = "Please include at least 1 uppercase, 1 lowercase and 1 number";
        validPassword == false;
    } else {
        if (password !== confirmPassword) {
            document.getElementById("passwordAlert").innerHTML = "*Passwords do not match";
            document.getElementById("confirmPasswordAlert").innerHTML = "*Passwords do not match";
            document.getElementById("password").style.border = "2px solid red";
            document.getElementById("confirm_password").style.border = "2px solid red";

        } else if (password === confirmPassword && validPassword) {
            document.getElementById("passwordAlert").innerHTML = "";
            document.getElementById("confirmPasswordAlert").innerHTML = "";
            document.getElementById("password").style.border = "1px solid gray";
            document.getElementById("confirm_password").style.border = "1px solid gray";
        }
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordAlert").innerHTML = "Confirm password is required";
    } else if (confirmPassword.length < 6) {
        document.getElementById('confirmPasswordAlert').innerHTML = "Password length should be 6 or more";
    }
    else if (!confirmPassword.match(passwordformat)) {
        document.getElementById('confirmPasswordAlert').innerHTML = "Please include at least 1 uppercase, 1 lowercase and 1 number";
    }
    else {
        document.getElementById('confirmPasswordAlert').innerHTML = "";
    }
}

function validateFirstName(firstName) {

    if (firstName === "") {
        document.getElementById('fnameAlert').innerHTML = "First name is required";
    }
    else if (firstName !== "") {
        const specialChars = /^[A-Za-z]+(\s*[A-Za-z]+)*$/;
        if (specialChars.test(firstName)) {
            document.getElementById('fnameAlert').innerHTML = "";
        }
        else {
            document.getElementById('fnameAlert').innerHTML = "Name shouldn't have symbols or numbers";
        }
    }
}

function validateLastName(lastName) {

    if (lastName === "") {
        document.getElementById('lnameAlert').innerHTML = "Last name is required";
    }
    else if (lastName !== "") {
        const specialChars = /^[A-Za-z]+(\s*[A-Za-z]+)*$/;
        if (specialChars.test(lastName)) {
            document.getElementById('lnameAlert').innerHTML = "";
        }
        else {
            document.getElementById('lnameAlert').innerHTML = "Name shouldn't have symbols or numbers";
        }
    }
}

function validateEmail(email) {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === "") {
        document.getElementById('emailAlert').innerHTML = "Email is required";
    } else {

        if (email.match(mailformat)) {
            document.getElementById("emailAlert").innerHTML = "";
        } else {
            document.getElementById("emailAlert").innerHTML = "Invalid email address";
        }
    }
}

function validatePhone(phone) {

    const phoneformat = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (phone === "") {
        document.getElementById('phoneAlert').innerHTML = "Phone is required";
    } else {

        if (phone.match(phoneformat)) {
            document.getElementById("phoneAlert").innerHTML = "";
        } else {
            document.getElementById("phoneAlert").innerHTML = "Invalid phone number";
        }
    }
}

document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("password").style.border = "1px solid gray";
    document.getElementById("confirm_password").style.border = "1px solid gray";
    document.getElementById("passwordAlert").innerHTML = "";
    document.getElementById("confirmPasswordAlert").innerHTML = "";
    document.getElementById('lnameAlert').innerHTML = "";
    document.getElementById('fnameAlert').innerHTML = "";
    document.getElementById("emailAlert").innerHTML = "";
    document.getElementById("phoneAlert").innerHTML = "";
});
