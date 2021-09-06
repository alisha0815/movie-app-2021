import React from "react";
// Every time you call setState, react is going to rerender with the new state

// If we don't use setState, render function wouldn't be called with the new state
class App extends React.Component {
  state = {
    isLoading: true, // default is loading
  };

  componentDidMount() {
    //   delay function
    setTimeout(() => {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 4000);
    });
  }
  render() {
    const { isLoading } = this.state; // return return{" "}
    return <div>{isLoading ? "Loading...." : "We are ready 🤗"}</div>;
  }
}

export default App;
