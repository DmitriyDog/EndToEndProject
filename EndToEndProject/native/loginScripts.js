function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
}


function saveCredentials(email, password, remember) {
    if (remember) {
        sessionStorage.setItem('savedEmail', email);
        sessionStorage.setItem('savedPassword', password);
    }
}

function loadSavedCredentials() {
    const savedEmail = sessionStorage.getItem('savedEmail');
    const savedPassword = sessionStorage.getItem('savedPassword');

    if (savedEmail && savedPassword) {
        emailInput.value = savedEmail;
        passwordInput.value = savedPassword;
        rememberCheckbox.checked = true;
    }
}