var valid = true;

function validateForm() {

    // let password = document.forms["myForm"]["password"].value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    console.log(password);
    console.log(confirmPassword);

    if (password == "" || confirmPassword == "") {

        if (password == "") {
            document.getElementById("passwordAlert").innerHTML = "Password is required";
            valid = false;
        } else {
            document.getElementById('passwordAlert').innerHTML = "";
        }

        if (confirmPassword == "") {
            document.getElementById("confirmPasswordAlert").innerHTML = "Confirm password is required";
            valid = false;
        }
        else {
            document.getElementById('confirmPasswordAlert').innerHTML = "";
        }

    } else if (password !== confirmPassword) {

        document.getElementById("passwordAlert").innerHTML = "*Passwords do not match";
        document.getElementById("confirmPasswordAlert").innerHTML = "";
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("confirm_password").style.border = "2px solid red";
        valid = false;

    } else if (password === confirmPassword) {
        document.getElementById("passwordAlert").innerHTML = "";
        document.getElementById("confirmPasswordAlert").innerHTML = "";
        document.getElementById("password").style.border = "1px solid gray";
        document.getElementById("confirm_password").style.border = "1px solid gray";
    }

    if (document.getElementById('first_name').value == "") {
        document.getElementById('fnameAlert').innerHTML = "First name is required";
        valid = false;
    } else {
        document.getElementById('fnameAlert').innerHTML = "";

    }

    if (document.getElementById('last_name').value == "") {
        document.getElementById('lnameAlert').innerHTML = "Last name is required";
        valid = false;
    } else {
        document.getElementById('lnameAlert').innerHTML = "";
    }

                          /*********Email***** */
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (document.getElementById('email').value == "") {

        document.getElementById('emailAlert').innerHTML = "Email is required";
        valid = false;
    } else if (document.getElementById('email').value != "") {

        if (document.getElementById('email').value.match(mailformat)) {
            document.getElementById("emailAlert").innerHTML = "";
        }
        else {
            document.getElementById("emailAlert").innerHTML = "Invalid email address";
            valid = false;
        }
    }

                         /*********Phone****** */

    var phoneformat = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (document.getElementById('phone').value == "") {

        document.getElementById('phoneAlert').innerHTML = "Phone is required";
        valid = false;
    } else if (document.getElementById('phone').value != "") {

        if (document.getElementById('phone').value.match(phoneformat)) {
            document.getElementById("phoneAlert").innerHTML = "";
        }
        else {
            document.getElementById("phoneAlert").innerHTML = "Invalid phone number";
            valid = false;
        }

    }
}   
                           /*********ResetBtn**********/

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
