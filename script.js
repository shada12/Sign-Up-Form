function validateForm() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    if (password === "") {
        document.getElementById("passwordAlert").innerHTML = "Password is required";
    }
    else if (password.length >= 6) {
        document.getElementById("passwordAlert").innerHTML = "";
    }
    else {
        document.getElementById('passwordAlert').innerHTML = "Password length should be 6 or more";
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordAlert").innerHTML = "Confirm password is required";

    } else if (confirmPassword.length >= 6) {
        document.getElementById('confirmPasswordAlert').innerHTML = "";
    }
    else {
        document.getElementById('confirmPasswordAlert').innerHTML = "Password length should be 6 or more";
    }

    if (password.length >= 6 && confirmPassword.length >= 6) {
        if (password === confirmPassword) {
            document.getElementById("passwordAlert").innerHTML = "";
            document.getElementById("confirmPasswordAlert").innerHTML = "";
            document.getElementById("password").style.border = "1px solid gray";
            document.getElementById("confirm_password").style.border = "1px solid gray";
        }
        else {
            document.getElementById("passwordAlert").innerHTML = "*Passwords do not match";
            document.getElementById("confirmPasswordAlert").innerHTML = "*Passwords do not match";
            document.getElementById("password").style.border = "2px solid red";
            document.getElementById("confirm_password").style.border = "2px solid red";
        }
    }

    if (firstName === "") {
        document.getElementById('fnameAlert').innerHTML = "First name is required";
    } else {
        document.getElementById('fnameAlert').innerHTML = "";
    }
    if (lastName === "") {
        document.getElementById('lnameAlert').innerHTML = "Last name is required";
    } else {
        document.getElementById('lnameAlert').innerHTML = "";
    }

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email === "") {

        document.getElementById('emailAlert').innerHTML = "Email is required";
    } else {

        if (email.match(mailformat)) {
            document.getElementById("emailAlert").innerHTML = "";
        }
        else {
            document.getElementById("emailAlert").innerHTML = "Invalid email address";
        }
    }

    var phoneformat = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (phone === "") {

        document.getElementById('phoneAlert').innerHTML = "Phone is required";
    } else {

        if (phone.match(phoneformat)) {
            document.getElementById("phoneAlert").innerHTML = "";
        }
        else {
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

