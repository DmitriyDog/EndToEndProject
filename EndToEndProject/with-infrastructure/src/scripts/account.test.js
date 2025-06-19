import { validatePassword, saveCredentials } from './loginScripts';
describe('Auth Module', () => {
    describe('validatePassword()', () => {
        test('������ ���������� true ��� ��������� ������', () => {
            expect(validatePassword('Password123!')).toBe(true);
            expect(validatePassword('45^JJJ6')).toBe(true);
        });
        test('������ ���������� false ��� ����������� ������', () => {
            expect(validatePassword('short')).toBe(false);
            expect(validatePassword('noSpecial123')).toBe(false);
            expect(validatePassword('NoNumbers!')).toBe(false);
        });
    });
    describe('saveCredentials()', () => {
        test('������ ��������� ��������� ������ � sessionStorage ��� ������� � ���� "��������� ����"', () => {
            saveCredentials('test@example.com', 'Test123!', true);
            expect(sessionStorage.getItem('savedEmail')).toBe('test@example.com');
            expect(sessionStorage.getItem('savedPassword')).toBe('Test123!');
        });
        test('�� ������ ��������� ��������� ������ � sessionStorage ��� ���������� ������� � ���� "��������� ����"', () => {
            saveCredentials('test@example.com', 'Test123!', false);
            expect(sessionStorage.getItem('savedEmail')).toBeNull();
            expect(sessionStorage.getItem('savedPassword')).toBeNull();
        });
    });
});
