import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => {
                setPopularMovies(data.results);
                setLoading(false); // Loading end karen
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false); // Error aane par bhi loading end karen
            });
    }, []);

    return (
        <>
            <div className="poster">
                {loading ? ( // Agar loading ho to spinner ya message show karen
                    <div className="loading">Loading...</div>
                ) : (
                    <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        transitionTime={3}
                        infiniteLoop={true}
                        showStatus={false}
                    >
                        {popularMovies.map(movie => (
                            <Link
                                key={movie.id} // key prop add karen
                                style={{ textDecoration: "none", color: "white" }}
                                to={`/movie/${movie.id}`}
                            >
                                <div className="posterImage">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                                        alt={movie.original_title} // alt attribute add karen
                                    />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                )}
                <MovieList />
            </div>
        </>
    );
};

export default Home;