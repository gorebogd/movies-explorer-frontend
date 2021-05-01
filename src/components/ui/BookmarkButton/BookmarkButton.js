import React from 'react';
import './BookmarkButton.css';

function BookmarkButton({isAdded, onClick}) {
    return (
        <button
            className={!isAdded
                ? 'bookmark-button'
                : 'bookmark-button bookmark-button_is-added'}
            type="button"
            onClick={onClick}
        />
    );
}

export default BookmarkButton;
