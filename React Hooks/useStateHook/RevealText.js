import React, { useState } from "react";
import { render } from "react-dom";

const RevealText = ({ text, maxLength }) => {
  const [hidden, setHidden] = useState(true);

  if (text.length < maxLength) {
    return <span>{text}</span>;
  }
  return (
    <span>
      {hidden ? text.substr(0, maxLength) : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}>
          <br /> Read More..
        </a>
      ) : (
        <a onClick={() => setHidden(true)}>
          <br /> Read Less...
        </a>
      )}
    </span>
  );
};

render(
  <RevealText
    text={`Focused, hard work is the real key
    to success. Keep your eyes on the goal, 
    and just keep taking the next step 
    towards completing it.`}
    maxLength={35}
  />,
  document.querySelector("#root")
);