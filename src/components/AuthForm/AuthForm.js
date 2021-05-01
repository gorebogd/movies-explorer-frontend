import React from 'react';
import SubmitButton from '../ui/SubmitButton/SubmitButton';
import './AuthForm.css';

function AuthForm({FormTypeLogin}) {
    return (
        <form className="auth-form">

            {FormTypeLogin ? null : (
                <label className="auth-form__label" htmlFor="name">
                    Имя
                    <input
                        className="auth-form__input"
                        id="name"
                        required
                        name="name"
                        type="text"
                        placeholder="Имя"
                    />
                    <span className="auth-form__error"/>
                </label>
            )}

            <label className="auth-form__label" htmlFor="email">
                E-mail
                <input
                    className="auth-form__input"
                    id="email"
                    required
                    name="email"
                    type="email"
                    placeholder="Почта"
                />
            </label>
            <span className="auth-form__error"/>

            <label className="auth-form__label" htmlFor="password">
                Пароль
                <input
                    className={FormTypeLogin
                        ? 'auth-form__input'
                        : 'auth-form__input auth-form__input_is-error'}
                    id="password"
                    required
                    name="password"
                    type="password"
                    defaultValue={FormTypeLogin ? '' : '****************'}
                    placeholder="Пароль"
                />
                {FormTypeLogin
                    ? null
                    : <span className="auth-form__error auth-form__error_is-active">Что-то пошло не так...</span>}

            </label>
            <div className={FormTypeLogin
                ? 'auth-form__submit-wrapper_type_signin'
                : 'auth-form__submit-wrapper_type_signup'}
            >
                <SubmitButton label={FormTypeLogin ? 'Войти' : 'Зарегистрироваться'}/>
            </div>
        </form>
    );
}

export default AuthForm;
