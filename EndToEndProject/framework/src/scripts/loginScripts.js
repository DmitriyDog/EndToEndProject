import '../styles/authStyles.css';
const userAccount = {
    email: 'user@example.com',
    password: 'SecurePassword123?',
};
function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
}
function saveCredentials(email, password, remember) {
    if (remember) {
        sessionStorage.setItem('savedEmail', email);
        sessionStorage.setItem('savedPassword', password);
        // ���������� ������ sessionStorage:
        // 1. ��� �������� ������/������ localStorage �����������, ��� ��� ������ ����������� ���������
        // 2. sessionStorage ��������� ��� �������� �������, ��� ����������
        // 3. � �������� ���������� ����� ������������ ������ ��������������, � �� ������� ������
        console.log('������ ��������� � sessionStorage');
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
// �������� ���������� ����� � ������
const CORRECT_EMAIL = userAccount.email;
const CORRECT_PASSWORD = userAccount.password;
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
                '������ ������ ��������� ������� 8 ��������, ������� ����� � ����������';
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
                '������ ������ ��������� ������� 8 ��������, ������� ����� � ����������';
            return;
        } else {
            errorBox.textContent = '';
        }
        if (
            isValid &&
            emailInput.value === CORRECT_EMAIL &&
            passwordInput.value === CORRECT_PASSWORD
        ) {
            authBox.textContent = '����������� ��������� �������!';
            saveCredentials(emailInput.value, passwordInput.value, rememberCheckbox.checked);
        } else if (isValid) {
            errorBox.textContent = '����������� ��������� ����� ��� ������';
        }
    });
});
