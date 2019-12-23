import React from 'react';

const Todo = props => {
    return (
        <li>
            <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle}/>
            <span>{props.todo.text} &emsp;</span>
            <button onClick={props.onDelete}>Delete</button>
        </li>
    )
}

export default Todo;