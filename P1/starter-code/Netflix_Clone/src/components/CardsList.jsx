import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TrendingMovieCard from './TrendingMovieCard';
import RecommendedMovieCard from './RecommendedMovieCard'; 


const CardsList = ({trendingMovies, recommendedMovies, queriedMovies, searchQuery}) => {

    return (
        <div>
            {searchQuery === '' ? (
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
            ) : queriedMovies.length > 0 ? (
                <div className="min-h-screen min-w-screen bg-[#10141f]">
                    <h2 className="text-2xl font-bold text-white">Matched movies were found</h2>
                    <div className="flex flex-wrap pt-8">
                        {queriedMovies.map((movie) => (
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
            ) : (
                <div className="min-h-screen min-w-screen bg-[#10141f]">
                    <h2 className="text-2xl font-bold text-white">No matches were found</h2>
                </div>
            )}
        </div>
    );
};

export default CardsList;