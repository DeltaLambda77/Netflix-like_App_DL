import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TrendingMovieCard from './TrendingMovieCard';
import RecommendedMovieCard from './RecommendedMovieCard'; 


const CardsList = ({searchQuery, queriedMovies, movieData, page}) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [tvSeries, setTVSeries] = useState([]);
    const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

    useEffect(()=> {
        const trendingMovieList = movieData.filter((movie) => movie.isTrending);
        const recommendedMovieList = movieData.filter((movie) => !movie.isTrending);
        const movieList = movieData.filter((movie) => movie.category === 'Movie');
        const tvSeriesList = movieData.filter((movie) => movie.category === 'TV Series');
        const bookmarkedMovieList = movieData.filter((movie) => movie.isBookmarked);

        setTrendingMovies(trendingMovieList);
        setRecommendedMovies(recommendedMovieList);
        setMovies(movieList);
        setTVSeries(tvSeriesList);
        setBookmarkedMovies(bookmarkedMovieList);
    }, []);

    if (page.home) {

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
        )
    }
    else if (page.movies) {
        return (
            <div>
                {searchQuery === '' ? (
                    <div>
                        <h2 className="text-2xl font-bold text-white">Browse Movies</h2>
                        <div className="flex flex-wrap pt-8">
                            {movies.map((movie) => (
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
        )
    }
    else if (page.tvSeries) {
        return (
            <div>
                {searchQuery === '' ? (
                    <div>
                        <h2 className="text-2xl font-bold text-white">Browse TV Series</h2>
                        <div className="flex flex-wrap pt-8">
                            {tvSeries.map((movie) => (
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
        )
    }
    else if (page.bookmarked) {
        return (
            <div>
                {searchQuery === '' ? (
                    <div>
                        <h2 className="text-2xl font-bold text-white">Your Bookmarked TV Shows and Movies</h2>
                        <div className="flex flex-wrap pt-8">
                            {bookmarkedMovies.map((movie) => (
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
        )
    }
};

export default CardsList;