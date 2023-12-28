import React, { useState, useEffect } from 'react';
import movieDataFile from './../../data.json';
import { v4 as uuidv4 } from 'uuid';
import TrendingMovieCard from './TrendingMovieCard';
import RecommendedMovieCard from './RecommendedMovieCard'; 


const CardsList = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);


    useEffect(() => {
        const trendingMovieList = movieDataFile.filter((movie) => movie.isTrending);
        const recommendedMovieList = movieDataFile.filter((movie) => !movie.isTrending);

        setTrendingMovies(trendingMovieList);
        setRecommendedMovies(recommendedMovieList);
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-white">Trending</h2>
            <div className="flex flex-wrap pt-8">
                {trendingMovies.map((movie) => (
                    <TrendingMovieCard
                    key={uuidv4()}
                    title={movie.title}
                    year={movie.year}
                    category={movie.category}
                    rating={movie.rating}
                    thumbnail={movie.thumbnail.trending.large}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
            <div className="flex flex-wrap pt-8">
                {recommendedMovies.map((movie) => (
                    <RecommendedMovieCard 
                    key={uuidv4()}
                    title={movie.title}
                    year={movie.year}
                    category={movie.category}
                    rating={movie.rating}
                    thumbnail={movie.thumbnail.regular.small}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardsList;