// Get form elements
const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Form validation function
form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isFormValid = validateInputs();
    if (isFormValid) {
        alert('Sign-up successful!');
        // Here you can send form data to the server
        form.reset();
    }
});

// Validate inputs function
function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    let isValid = true;

    // Username validation
    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid');
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Password validation
    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 6) {
        setError(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        setSuccess(password);
    }

    // Confirm Password validation
    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
        isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess(confirmPassword);
    }

    return isValid;
}

// Set error message
function setError(input, message) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector('small');
    small.textContent = message;
    small.style.visibility = 'visible';
    input.style.borderColor = 'red';
}

// Set success message
function setSuccess(input) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector('small');
    small.style.visibility = 'hidden';
    input.style.borderColor = '#e50914';
}

// Email validation regex
function isValidEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
}
