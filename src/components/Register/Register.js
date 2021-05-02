import React from 'react';
import {Link} from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import MainLogoLink from '../ui/MainLogoLink/MainLogoLink';
import './Register.css';

function Register() {
    return (
        <div className="register">
            <MainLogoLink/>
            <h2 className="register__title">Добро пожаловать!</h2>
            <AuthForm/>
            <p className="register__footer">
                Уже зарегистрированы?
                <Link className="register__link" to="/signin">Войти</Link>
            </p>
        </div>
    );
}

export default Register;
