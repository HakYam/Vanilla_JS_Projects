let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('contact-name').value;
    let words = name.trim().split(/\s+/);
    if (name.length == 0) {
        nameError.innerHTML = '<i class="fa-regular fa-face-frown"></i>';
        return false;
    }
    // Check if there are at least two words
    if (words.length < 2) {
        // Prevent form submission
        event.preventDefault();

        // Show an error message
        nameError.innerHTML = '<i class="fa-regular fa-face-frown"></i>';
    } else {
        // Clear error message
        nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
};

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = '<i class="fa-regular fa-face-frown"></i>';
        return false
    }
    // Check if the phone number contains only numbers (and optional spaces, dashes, or parentheses)
    if (!/^[0-9\s\-\(\)]+$/.test(phone)) {
        phoneError.innerHTML = '<i class="fa-regular fa-face-frown"></i>';
        return false
    }

    else
        phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
};

function validateEmail () {
    let email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = '<i class="fa-regular fa-face-frown"></i>';
        return false
    }

    // Regular expression for validating email
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if the email matches the regular expression
    if (!emailRegex.test(email)) {
        emailError.innerHTML = '<i class="fa-regular fa-face-frown"></i>';
        return false
    }

    else  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
};

function validateMessage () {
    let message = document.getElementById('contact-message').value;
    if (message.length == 0) {
        messageError.innerHTML = '<i class="fa-regular fa-face-frown"></i>';
        return false
    }
    else  messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
};

function validateForm() {
    if (!validateName() || validatePhone() || validateEmail () || validateMessage ()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please check the required fields';

        setTimeout (function(){
            submitError.style.display = 'none';
        }, 2500);
        return false;
    }
};