import React from 'react';
import './BurgerMenuButton.css';

function BurgerMenuButton({handleClick}) {
    return (
        <button className="menu-button" onClick={handleClick} type="button"/>
    );
}

export default BurgerMenuButton;
