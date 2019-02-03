import React from 'react';

const validationText = ( props ) => {
    let validationMesssage = 'Text long enough.';

    if (props.inputLength <= 5) {
        validationMesssage = 'Text too short.';
    }

    return (
        <div className="ValidationText">
            <p>{validationMesssage}</p>
        </div>
    );
};

export default validationText;