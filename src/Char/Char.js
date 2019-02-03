import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div
            onClick={props.clicked} 
            className="characters">
            {props.character}
        </div>
    )
};

export default char;