import React, { useState, useEffect } from "react";
import Sidebar from './../components/Sidebar';
import CardsList from './../components/CardsList';
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [queriedMovies, setQueriedMovies] = useState([]);
    const [movieData, setMovieData] = useOutletContext();
    const [page, setPage] = useState({
        home: true,
        bookmarked: false,
        movies: false,
        tvSeries: false,
    });

    useEffect(() => {
        const queriedMovieList = movieData.filter((movie) => movie.title.toLowerCase().includes(searchQuery));

        setQueriedMovies(queriedMovieList);
    }, [searchQuery]);

    return (
        <div className="flex bg-[#10141f]">
            <Sidebar />
            <div className="flex-1 ml-32">
                <div>
                    <div className="flex pt-8 pb-4 items-center">
                        <img className="align-bottom h-8" src={'./assets/icon-search.svg'} alt="search-icon" />                
                        <input
                            type="text"
                            placeholder="Search for movies or TV series"
                            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                            className="border border-gray-300 p-2 rounded-l focus:outline-none bg-[#1a1a1b] border-none 
                            w-64 pl-4 text-white"
                        />
                    </div>
                    <CardsList
                        searchQuery={searchQuery}
                        queriedMovies={queriedMovies}
                        movieData={movieData}
                        page={page}
                    />
                </div>

            </div>
        </div>
    );
};

export default Home;