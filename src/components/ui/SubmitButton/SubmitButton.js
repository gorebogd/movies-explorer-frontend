import React from 'react';
import './SubmitButton.css';

function SubmitButton({label}) {
    return (
        <button type="submit" className="submit-button">{label}</button>
    );
}

export default SubmitButton;
