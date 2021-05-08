import React from 'react';
import './BookmarkRemoveButton.css';

function BookmarkRemoveButton({onClick}) {
    return (
        <button className="bookmark-remove-button" type="button" onClick={onClick}/>
    );
}

export default BookmarkRemoveButton;
