import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [type]); // type change hone par hi data fetch karen

    const getData = () => {
        setLoading(true); // Loading start karen
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((res) => res.json())
            .then((data) => {
                setMovieList(data.results);
                setLoading(false); // Loading end karen
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // Error aane par bhi loading end karen
            });
    };

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            {loading ? ( // Agar loading ho to spinner ya message show karen
                <div className="loading">Loading...</div>
            ) : (
                <div className="list__cards">
                    {movieList.map((movie) => (
                        <Cards key={movie.id} movie={movie} /> // key prop add karen
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieList;