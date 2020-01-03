import React from "react";
import { connect } from "react-redux";
// import { INCREMENT, DECREMENT, RESET } from "./actions";
import { increment, decrement, reset } from "./actions";

class Counter extends React.Component {
  // state = { count: 0 };

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    // this.props.dispatch({ type: INCREMENT });
    // this.props.dispatch(increment());
    this.props.increment();
  };

  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    // this.props.dispatch({ type: DECREMENT });
    // this.props.dispatch(decrement());
    this.props.decrement();
  };

  reset = () => {
    // this.props.dispatch({ type: RESET });
    // this.props.dispatch(reset());
    this.props.reset();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">
            {/* {this.state.count} */}
            {this.props.count}
          </span>
          <button onClick={this.increment}>+</button>
        </div>
        <p>
          <button onClick={this.reset}>0</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps)(Counter);
