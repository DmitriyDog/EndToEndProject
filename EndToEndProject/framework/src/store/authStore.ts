import { use } from 'react';
import { create } from 'zustand';

interface AuthStore {
    email: string;
    password: string;
    remember: boolean;
    error: string;
    authMessage: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setRemember: (remember: boolean) => void;
    setError: (error: string) => void;
    setAuthMessage: (message: string) => void;
    login: () => void;
    inputPassword: () => void;
}

export const useAuthStore = create < AuthStore > ((set) => ({
    email: '',
    password: '',
    remember: false,
    error: '',
    authMessage: '',
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setRemember: (remember) => set({ remember }),
    setError: (error) => set({ error }),
    setAuthMessage: (message) => set({ authMessage: message }),
    login: () => {
        const state = useAuthStore.getState();
        if (state.email === 'user@example.com' && state.password === 'Password123!') {
            set({
                authMessage: 'Авторизация выполнена успешно!',
                error: ''});
            if (state.remember) {
                sessionStorage.setItem('savedEmail', state.email);
                sessionStorage.setItem('savedPassword', state.password);
            }
        } else {
            set({
                error: 'Неправильно введенные почта или пароль',
                authMessage: ''});
        }
    },
    inputPassword: () => {
        const currentPasswordInput = useAuthStore.getState();
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!re.test(currentPasswordInput.password)) {
            set({ error: 'Пароль должен содержать минимум 8 символов, включая цифру и спецсимвол' });
        } else {
            set({ error: '' });
        }
    }
}));