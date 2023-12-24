import React from 'react';

const MovieCard = ({title, content}) => (
    <div className="p-4 m-2 border rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p>{content}</p>
    </div>
);

export default MovieCard;