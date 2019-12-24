import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div>
            <label htmlFor="name" className="label-text">User Name: </label>
            <input type="text" name="userName" onChange={props.onChangeName} value={props.name}></input>
        </div>
        
    );
}

export default UserInput;