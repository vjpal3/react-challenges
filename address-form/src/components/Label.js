import React from 'react';

const Label = (props) => {
  return (
    <div>
      <label htmlFor={props.htmlFor}>
        {props.content}
      </label>
    </div>
  );
};

export default Label;
