import React from "react";
import axios from "axios";
// Every time you call setState, react is going to rerender with the new state

// If we don't use setState, render function wouldn't be called with the new state
class App extends React.Component {
  state = {
    isLoading: true, // default is loading
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state; // return return{" "}
    return <div>{isLoading ? "Loading...." : "We are ready 🤗"}</div>;
  }
}

export default App;
