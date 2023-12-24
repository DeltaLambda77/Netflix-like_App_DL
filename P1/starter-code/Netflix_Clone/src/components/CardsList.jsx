import React, { useState, useEffect } from 'react';
import movieDataFile from './../../data.json';
import { v4 as uuidv4 } from 'uuid';
import MovieCard from './MovieCard'; 

const CardsList = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        setMovieData(movieDataFile);
    }, []);

    return (
        <div className="flex flex-wrap">
        {movieData.map((movie) => (
            <MovieCard 
            key={uuidv4()}
            title={movie.title}
            year={movie.year}
            category={movie.category}
            rating={movie.rating}
            thumbnail={movie.thumbnail.regular.small}
            />
        ))}
        </div>
    );
};

export default CardsList;