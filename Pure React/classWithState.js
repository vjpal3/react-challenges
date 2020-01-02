import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Room extends React.Component {
  state = {
    isLit: true,
    temprature: 72
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  turnOn = () => {
    this.setState({
      isLit: true
    });
  };

  turnOff = () => {
    this.setState({
      isLit: false
    });
  };

  incTemprature = () => {
    this.setState({
      temprature: this.state.temprature + 1
    });
  };

  decTemprature = () => {
    this.setState({
      temprature: this.state.temprature - 1
    });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";

    return (
      <div className={`room ${brightness}`}>
        The room is {this.state.isLit ? "lit" : "dark"} <br />
        <p>
          <button onClick={this.flipLight}>Flip</button>{" "}
        </p>
        <p>
          <button onClick={this.turnOn}>On</button>
        </p>
        <p>
          <button onClick={this.turnOff}>Off</button>
        </p>
        <p>The current temprature is {this.state.temprature} F</p>
        <p>
          <button onClick={this.incTemprature}>+</button>
        </p>
        <p>
          <button onClick={this.decTemprature}>-</button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.querySelector("#root"));
