import { Account } from './account.js';

// Захардкодил правильные почту и пароль
export const userAccount: Account = {
    email: 'user@example.com',
    password: 'Password123!',
};

export function validatePassword(password: string) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
}

export function saveCredentials(email: string, password: string, remember: boolean) {
    if (remember) {
        sessionStorage.setItem('savedEmail', email);
        sessionStorage.setItem('savedPassword', password);
    }
}

function loadSavedCredentials(
    emailInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
    rememberCheckbox: HTMLInputElement,
) {
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

const form = <HTMLFormElement>document.getElementById('main-form');
const emailInput = <HTMLInputElement>document.getElementById('email-input');
const passwordInput = <HTMLInputElement>document.getElementById('password-input');
const rememberCheckbox = <HTMLInputElement>document.getElementById('remember-me-checkbox');
const errorBox = <HTMLDivElement>document.getElementById('error-message');
const authBox = <HTMLDivElement>document.getElementById('auth-message');

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
