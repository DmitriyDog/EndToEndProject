import { validatePassword, saveCredentials } from './loginScripts';
describe('Auth Module', () => {
    describe('validatePassword()', () => {
        test('Должен возвращать true для валидного пароля', () => {
            expect(validatePassword('Password123!')).toBe(true);
            expect(validatePassword('45?jJJ68')).toBe(true);
        });
        test('Должен возвращать false для невалидного пароля', () => {
            expect(validatePassword('short')).toBe(false);
            expect(validatePassword('noSpecial123')).toBe(false);
            expect(validatePassword('NoNumbers!')).toBe(false);
        });
    });
    describe('saveCredentials()', () => {
        test('Не должен сохранять введенные данные в sessionStorage при отсутствии галочки в поле "Запомнить меня"', () => {
            saveCredentials('test@example.com', 'Test123!', false);
            expect(sessionStorage.getItem('savedEmail')).toBeNull();
            expect(sessionStorage.getItem('savedPassword')).toBeNull();
        });
        test('Должен сохранять введенные данные в sessionStorage при галочке в поле "Запомнить меня"', () => {
            saveCredentials('test@example.com', 'Test123!', true);
            expect(sessionStorage.getItem('savedEmail')).toBe('test@example.com');
            expect(sessionStorage.getItem('savedPassword')).toBe('Test123!');
        });
    });
});
