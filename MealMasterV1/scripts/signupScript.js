
//=========================Flipping button
function flip() {
    var flipContainer = document.getElementById("flipContainer");
    flipContainer.classList.toggle("flipped");
}



//=========================Email Validation==Password Validation
function validateSignup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Regular expression for email validation
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    if (password.length < 10 || password.length > 20) {
        alert("Password must be between 10 and 20 characters long.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Form is valid, you can proceed with submission
    return true;
}

