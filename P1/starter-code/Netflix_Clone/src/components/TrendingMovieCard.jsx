import React from 'react';

const TrendingMovieCard = ({title, year, category, rating, thumbnail}) => (

    <div className="rounded-md text-white pr-8 pb-8">
        <div className="relative">
            <img
            className="rounded-2xl w-96 h-auto"
            src={thumbnail}
            alt="thumbnail-icon"
            />
            <div className="absolute left-0 bottom-0 flex flex-col text-white my-2 mx-6">
                <div className="flex flex-row space-x-2 items-center">
                    <p>{year} &#8226;</p>
                    <img 
                        className="h-3"
                        src={category === "Movie" ? './assets/icon-category-movie.svg' : './assets/icon-category-tv.svg'} 
                        alt="category-icon"
                    />
                    <p>{category}</p>
                    <p>&#8226; {rating}</p>
                </div>

                <h2 className="text-lg font-bold mb-2">{title}</h2>
            </div>
        </div>
    </div>
);

export default TrendingMovieCard;