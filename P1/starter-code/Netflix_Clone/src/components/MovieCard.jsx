import React from 'react';

const MovieCard = ({title, year, category, rating, thumbnail}) => (
    <div className="p-4 m-2 border rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p>{year}</p>
        <p>{category}</p>
        <p>{rating}</p>
        <img src={`./../${thumbnail}`} alt="thumbnail-icon"/>
        <p>{thumbnail}</p>
    </div>
);

export default MovieCard;