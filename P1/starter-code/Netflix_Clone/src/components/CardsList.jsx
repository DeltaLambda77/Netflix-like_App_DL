import React, { useState, useEffect } from 'react';
import movieDataFile from './../../data.json';
import { v4 as uuidv4 } from 'uuid';

const CardsList = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        setMovieData(movieDataFile);
    }, []);

    return (
        <div className="flex flex-wrap">
        {movieData.map((movie) => (
            <MovieCard key={uuidv4()} title={movie.title} content={movie.content} />
        ))}
        </div>
    );
};

const MovieCard = ({title, content}) => (
    <div className="p-4 m-2 border rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p>{content}</p>
    </div>
);

export default CardsList;