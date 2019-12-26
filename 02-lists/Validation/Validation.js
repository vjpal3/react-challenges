import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
            <p>{props.input >= 5 ? "Text long enough"  : "Text too short"}</p>
        </div>
    );
}

export default ValidationComponent;