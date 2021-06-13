import React, { useState } from "react";

import "./search-movie.styles.css";

import MovieCard from "../movie-card/movie-card.component";

const SearchMovies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        // console.log("submiting");
        const apiKey = "0ea18f77d0edf03752f69482ad788951";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.err(err);
        }
    };

    return (
        <div>
            <form action="" className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">
                    Movie name
                </label>
                <input
                    type="text"
                    className="input"
                    name="query"
                    placeholder="i.e Jurassic Park"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">
                    Search
                </button>
            </form>
            <div className="card-list">
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default SearchMovies;
