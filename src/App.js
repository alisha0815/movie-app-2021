import React from "react";
import axios from "axios";
import Movie from "./Movie";
// Every time you call setState, react is going to rerender with the new state

// If we don't use setState, render function wouldn't be called with the new state
class App extends React.Component {
  state = {
    isLoading: true, // default is loading
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    // console.log(movies.data.data.movies);
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; // return return{" "}
    return (
      <div>
        {isLoading
          ? "Loading...."
          : movies.map((movie) => (
              //   console.log(movie);

              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
