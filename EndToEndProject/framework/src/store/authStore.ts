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
            set({ authMessage: 'Успешный вход!' });
            if (state.remember) {
                sessionStorage.setItem('savedEmail', state.email);
                sessionStorage.setItem('savedPassword', state.password);
            }
        } else {
            set({ error: 'Неверный email или пароль' });
        }
    },
}));