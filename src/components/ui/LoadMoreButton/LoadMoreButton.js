import React from 'react';
import './LoadMoreButton.css';

function LoadMoreButton({onClick}) {
    return (
        <div className="load-more">
            <button className="load-more__more-button" type="button" onClick={onClick}>Ещё</button>
        </div>
    );
}

export default LoadMoreButton;
