import React, {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import SignInButton from '../ui/SignInButton/SignInButton';
import ProfileButton from '../ui/ProfileButton/ProfileButton';
import BurgerMenuButton from '../ui/BurgerMenuButton/BurgerMenuButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.css';
import MainLogoLink from '../ui/MainLogoLink/MainLogoLink';

function Header({isLoggedIn}) {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    });

    const isMobile = width <= 768;

    const [isOpen, setIsOpen] = useState(false);
    const handleBurgerMenuClick = () => setIsOpen(!isOpen);

    return (
        <header className="header">

            <MainLogoLink/>

            {isLoggedIn && isMobile && <BurgerMenuButton handleClick={handleBurgerMenuClick}/>}

            {!isLoggedIn && (
                <div className="header__nav-wrapper header__nav-wrapper_type_unauth">
                    <Navigation isLoggedIn={isLoggedIn}/>
                    <SignInButton/>
                </div>
            )}

            {!isMobile && isLoggedIn && (
                <div className="header__nav-wrapper header__nav-wrapper_type_auth">
                    <Navigation isLoggedIn={isLoggedIn}/>
                    <ProfileButton/>
                </div>
            )}

            {isLoggedIn && <BurgerMenu isOpen={isOpen} closeHandler={handleBurgerMenuClick}/>}

        </header>
    );
}

export default Header;
