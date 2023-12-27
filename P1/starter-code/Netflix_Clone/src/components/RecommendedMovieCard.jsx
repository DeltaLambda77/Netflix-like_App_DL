import React from 'react';


const RecommendedMovieCard = ({title, year, category, rating, thumbnail}) => (

    <div className="p-4 m-2 rounded-md shadow-md text-white">
        <div>
            <img
            className="rounded-2xl w-60 h-auto"
            src={thumbnail}
            alt="thumbnail-icon"
            />
            <div className=" left-0 bottom-0 flex flex-col text-white">
                <div className="flex flex-row space-x-1 my-1 text-left">
                    <p>{year}</p>
                    <img 
                        src={category === "Movie" ? './assets/icon-category-movie.svg' : './assets/icon-category-tv.svg'} 
                        alt="category-icon"
                    />
                    <p>{category}</p>
                    <p>{rating}</p>
                </div>

                <h2 className="text-lg font-bold mb-2">{title}</h2>
            </div>
        </div>
    </div>
);

export default RecommendedMovieCard;