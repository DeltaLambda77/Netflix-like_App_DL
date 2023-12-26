import React from 'react';

const MovieCard = ({title, year, category, rating, thumbnail}) => (

    <div className="p-4 m-2 rounded-md shadow-md text-white">
        <div className="relative">
            <img
            className="rounded-2xl w-full h-auto"
            src={thumbnail}
            alt="thumbnail-icon"
            />
            <div className="absolute left-0 bottom-0 flex flex-col items-center text-white">
                <div className="flex flex-row space-x-1">
                    <p>{year}</p>
                    <p>{category}</p>
                    <p>{rating}</p>
                </div>

                <h2 className="text-lg font-bold mb-2">{title}</h2>
            </div>
        </div>
    </div>
);

export default MovieCard;