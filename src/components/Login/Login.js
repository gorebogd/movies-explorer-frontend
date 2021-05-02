import React from 'react';
import {Link} from 'react-router-dom';
import MainLogoLink from '../ui/MainLogoLink/MainLogoLink';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <MainLogoLink/>
            <h2 className="login__title">Рады видеть!</h2>
            <AuthForm FormTypeLogin/>
            <p className="login__footer">
                Ещё не зарегистрированы?
                <Link className="login__link" to="/signup">Регистрация</Link>
            </p>
        </div>
    );
}

export default Login;
