import React from 'react';
import './SubmitButton.css';

function SubmitButton({label, submitHandler, isDisabled}) {
    return (
        <button
            disabled={isDisabled}
            type="submit"
            className={isDisabled ? 'submit-button' : 'submit-button submit-button_is-active'}
            onSubmit={submitHandler}
        >
            {label}
        </button>
    );
}

export default SubmitButton;
