import { useAuthStore } from '../store/authStore';
import { AuthHeader } from './authHeader';
import { SocialAuth } from './socialAuth';
import { AuthForm } from './authForm';
import { AuthFooter } from './authFooter';

export const LoginForm = () => {
    const { error, authMessage, login } = useAuthStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="auth-container">
            <AuthHeader />

            <main>
                <form onSubmit={handleSubmit} id="main-form">
                    <h3>Авторизация</h3>
                    {error && <div id="error-message">{error}</div>}
                    {authMessage && <div id="auth-message">{authMessage}</div>}

                    <SocialAuth />
                    <AuthForm />

                    <div className="confirm-auth">
                        <button type="submit">Войти</button>
                    </div>
                </form>
            </main>

            <AuthFooter />
        </div>
    );
};