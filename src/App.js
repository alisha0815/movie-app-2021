import React from "react";
import PropTypes from "prop-types";

// If we don't use setState, render function wouldn't be called with the new state
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState({ count: 1 });
  };
  minus = () => {
    this.setState({ count: -1 });
  };
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
