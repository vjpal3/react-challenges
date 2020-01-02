import React from "react";
import ReactDOM from "react-dom";

function MediaCard({ title, body, imageUrl }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageUrl} alt="Happy New Year" />
    </div>
  );
}

function Gate({ isOpen }) {
  return isOpen ? <p>Open!!!</p> : <p>Closed!!!</p>;
}

ReactDOM.render(
  <div>
    <MediaCard
      title="Social Card"
      body={
        //Must return one root element
        <span>
          You wanna know how to <strong>Learn React</strong> my{" "}
          <strong>friend?</strong>
        </span>
      }
      imageUrl="https://unsplash.com/photos/9LZBi9Le7dE"
    />
    <Gate isOpen={false} />
    <Gate isOpen />
  </div>,
  document.querySelector("#root")
);
