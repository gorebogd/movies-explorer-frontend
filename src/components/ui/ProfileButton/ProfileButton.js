import React from 'react';
import {Link} from 'react-router-dom';
import './ProfileButton.css';

function ProfileButton() {
    return (
        <Link to="/profile" className="profile-button">
            Аккаунт
            <div className="profile-button__image"/>
        </Link>
    );
}

export default ProfileButton;
