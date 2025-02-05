import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Prop validation ke liye

const Card = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
            ) : (
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div className="cards">
                        <img
                            className="cards__img"
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.original_title} // Alt attribute add kiya
                        />
                        <div className="cards__overlay">
                            <div className="cards__title">{movie.original_title}</div>
                            <div className="cards__runtime">
                                {movie.release_date}
                                <span className="cards__rating">
                                    {movie.vote_average} <i className="fas fa-star" />
                                </span>
                            </div>
                            <div className="cards__description">
                                {movie.overview.slice(0, 118) + "..."}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

// Prop validation
Card.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        original_title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
    }).isRequired,
};

export default Card;