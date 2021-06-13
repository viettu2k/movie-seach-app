import React from "react";

import "./movie-card.styles.css";

const MovieCard = ({ movie }) => {
    return (
        <div>
            <div className="card" key={movie.id}>
                <img
                    className="card--image"
                    alt={movie.title + " poster"}
                    src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                />
                <div className="cart--content">
                    <h3 className="card--title">{movie.title}</h3>
                    <p>
                        <small>RELEASE DATE: {movie.release_date}</small>
                    </p>
                    <p>
                        <small>RATING: {movie.vote_average}</small>
                    </p>
                    <p className="card--desc">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
