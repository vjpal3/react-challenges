import React from 'react';


const UserOutput = (props) => {
    const pStyle = {
        padding: '10px',
        border: '2px solid blue'
    }
    return (
        <div>
            <h3>Name: {props.userName}</h3>
            <p style={pStyle}>{props.text1}</p>
            <p>{props.text2}</p>
        </div>
    
    );
}

export default UserOutput;
