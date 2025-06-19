import { ChangeEvent } from 'react';
import { useAuthStore } from '../store/authStore';

export const AuthForm = () => {
    const {
        email,
        password,
        remember,
        setEmail,
        setPassword,
        setRemember,
        inputPassword
    } = useAuthStore();

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        inputPassword();
    }

    return (
        <>
            <div className="divider"></div>

            <div className="input-group">
                <input
                    type="email"
                    placeholder="Электронная почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>

            <div className="checkbox-group">
                <label htmlFor="remember-me-checkbox">Запомнить меня: </label>
                <input
                    type="checkbox"
                    id="remember-me-checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                />
            </div>
        </>
    );
};