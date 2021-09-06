import React from "react";
// Every time you call setState, react is going to rerender with the new state

// If we don't use setState, render function wouldn't be called with the new state
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    // this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
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
