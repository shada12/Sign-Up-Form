

var valid = true;

function validateForm() {

    // let password = document.forms["myForm"]["password"].value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    console.log(password);
    console.log(confirmPassword);

    if (password == "" || confirmPassword == "") {

        if (password == "") {
            // alert("Password must be filled out");
            document.getElementById("passwordAlert").innerHTML = "*";
            valid = false;
        } else {
            document.getElementById('passwordAlert').innerHTML = "";

        }

        if (confirmPassword == "") {
            document.getElementById("confirmPasswordAlert").innerHTML = "*";
            valid = false;
        }
        else {
            document.getElementById('confirmPasswordAlert').innerHTML = "";

        }

    } else if (password !== confirmPassword) {

        document.getElementById("alertMessage").innerHTML = "*Passwords do not match";
        document.getElementById("passwordAlert").innerHTML = "*";
        document.getElementById("confirmPasswordAlert").innerHTML = "*";
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("confirm_password").style.border = "2px solid red";
        valid = false;

    } else if (password === confirmPassword) {

        document.getElementById("passwordAlert").innerHTML = "";
        document.getElementById("alertMessage").innerHTML = "";
        document.getElementById("confirmPasswordAlert").innerHTML = "";
        document.getElementById("password").style.border = "1px solid gray";
        document.getElementById("confirm_password").style.border = "1px solid gray";

    }

    if (document.getElementById('first_name').value == "") {
        document.getElementById('fnameAlert').innerHTML = "*";
        valid = false;
    } else {
        document.getElementById('fnameAlert').innerHTML = "";

    }


    if (document.getElementById('last_name').value == "") {
        document.getElementById('lnameAlert').innerHTML = "*";
        valid = false;
    } else {
        document.getElementById('lnameAlert').innerHTML = "";

    }

    if (document.getElementById('email').value == "") {
        document.getElementById('emailAlert').innerHTML = "*";
        valid = false;
    } else {
        document.getElementById('emailAlert').innerHTML = "";

    }

    if (document.getElementById('phone').value == "") {
        document.getElementById('phoneAlert').innerHTML = "*";
        valid = false;
    } else {
        document.getElementById('phoneAlert').innerHTML = "";

    }

}

document.getElementById("resetBtn").addEventListener("click", function () {

    document.getElementById("password").style.border = "1px solid gray";
    document.getElementById("confirm_password").style.border = "1px solid gray";
    document.getElementById("passwordAlert").innerHTML = "";
    document.getElementById("confirmPasswordAlert").innerHTML = "";
    document.getElementById("alertMessage").innerHTML = "";
    document.getElementById('phoneAlert').innerHTML = "";
    document.getElementById('emailAlert').innerHTML = "";
    document.getElementById('lnameAlert').innerHTML = "";
    document.getElementById('fnameAlert').innerHTML = "";

});
