// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
// props go to the first argument of the function
function Food({ fav }) {
  console.log(fav);
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="spagetti" />
      {/* This is how to pass the information */}
      {/*prop name fav = kimchi */}
    </div>
  );
}

export default App;
