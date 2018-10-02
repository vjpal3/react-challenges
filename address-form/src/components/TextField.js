import React from 'react';

const TextField = (props) => {
  // let handleChange = () => props.handleChange(props.id)
  return (
    <div>
      <input
        type='text'
        id={props.id}
        name={props.name}
        value={props.content}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default TextField;
