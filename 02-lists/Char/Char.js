import React from 'react';
import './Char.css';

const CharComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.removeChar}>
            <p>{props.input.trim()}</p>
        </div>
        
    );
}

export default CharComponent;