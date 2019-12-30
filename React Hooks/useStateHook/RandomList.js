import React, { useState } from "react";
import { render } from "react-dom";

const RandomList = props => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    //The setItems doesn't 'merge values', but overwrites. 
    //Using the ES6 spread operator to copy the existing items into the new array,  
    // and inserting the new item at the end  
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100
      }
    ]);
  };

  return (
    <div>
      {<button onClick={addItem}>Click to add one random number!</button>}
      {items.length > 0 ? (
        <span>
          <p>The list contains following items: </p>
          <ul>
            {items.map(item => {
              return <li key={item.id}>{item.value.toFixed(2)}</li>;
            })}
          </ul>
        </span>
      ) : (
        <p>The list is empty! </p>
      )}
    </div>
  );
};

render(<RandomList />, document.querySelector("#root"));
