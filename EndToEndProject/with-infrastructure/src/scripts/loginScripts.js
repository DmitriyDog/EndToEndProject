// Захардкодил правильные почту и пароль
export const userAccount = {
    email: 'user@example.com',
    password: 'Password123!',
};
export function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
}
export function saveCredentials(email, password, remember) {
    if (remember) {
        sessionStorage.setItem('savedEmail', email);
        sessionStorage.setItem('savedPassword', password);
    }
}
function loadSavedCredentials(emailInput, passwordInput, rememberCheckbox) {
    const savedEmail = sessionStorage.getItem('savedEmail');
    const savedPassword = sessionStorage.getItem('savedPassword');
    if (savedEmail && savedPassword) {
        emailInput.value = savedEmail;
        passwordInput.value = savedPassword;
        rememberCheckbox.checked = true;
    }
}
const CORRECT_EMAIL = userAccount.email;
export const CORRECT_PASSWORD = userAccount.password;
const form = document.getElementById('main-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const rememberCheckbox = document.getElementById('remember-me-checkbox');
const errorBox = document.getElementById('error-message');
const authBox = document.getElementById('auth-message');
window.addEventListener('DOMContentLoaded', () => {
    loadSavedCredentials(emailInput, passwordInput, rememberCheckbox);
    passwordInput.addEventListener('input', () => {
        if (!validatePassword(passwordInput.value)) {
            errorBox.textContent =
                'Пароль должен содержать минимум 8 символов, включая цифру и спецсимвол';
        } else {
            errorBox.textContent = '';
        }
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        authBox.textContent = '';
        let isValid = true;
        if (!validatePassword(passwordInput.value)) {
            errorBox.textContent =
                'Пароль должен содержать минимум 8 символов, включая цифру и спецсимвол';
            return;
        } else {
            errorBox.textContent = '';
        }
        if (
            isValid &&
            emailInput.value === CORRECT_EMAIL &&
            passwordInput.value === CORRECT_PASSWORD
        ) {
            authBox.textContent = 'Авторизация выполнена успешно!';
            saveCredentials(emailInput.value, passwordInput.value, rememberCheckbox.checked);
        } else if (isValid) {
            errorBox.textContent = 'Неправильно введенные почта или пароль';
        }
    });
});
