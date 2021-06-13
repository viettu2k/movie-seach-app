import React from "react";

import "./App.css";

import SearchMovies from "./components/search-movie/search-movie.component";

function App() {
    return (
        <div className="container">
            <h1 className="title">React movie search</h1>
            <SearchMovies />
        </div>
    );
}

export default App;
