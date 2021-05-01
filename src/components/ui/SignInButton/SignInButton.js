import React from 'react';
import {Link} from 'react-router-dom';
import './SignInButton.css';

function SignInButton() {
    return (
        <Link className="sign-in-button" to="/signin">Войти</Link>
    );
}

export default SignInButton;
