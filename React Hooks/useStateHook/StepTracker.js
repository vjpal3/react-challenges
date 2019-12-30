import React, { useState } from "react";
import { render } from "react-dom";

const StepTracker = props => {
  const [steps, setSteps] = useState(0);

  const increment = () => {
    setSteps(prevState => prevState + 1);
  };

  return (
    <div>
      <p>You have taken {steps} steps!</p>
      <button onClick={increment}>Click to take one step!</button>
    </div>
  );
};

render(<StepTracker />, document.querySelector("#root"));