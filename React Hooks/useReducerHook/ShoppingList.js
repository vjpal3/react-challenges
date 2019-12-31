import React, { useRef, useReducer } from "react";
import { render } from "react-dom";

function ShoppingList() {
  const inputRef = useRef();

  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];

      case "remove":
        return state.filter((_, index) => index !== action.index);

      case "clear":
        state = [];
        return state;

      default:
        return state;
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <p />
      <button onClick={() => dispatch({ type: "clear" })}>Clear List</button>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.id}>
              {item.name}
              <button onClick={() => dispatch({ type: "remove", index })}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

render(<ShoppingList />, document.querySelector("#root"));
