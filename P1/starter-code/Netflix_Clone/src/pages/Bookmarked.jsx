import React, { useState, useEffect } from "react";
import Sidebar from './../components/Sidebar';
import CardsList from './../components/CardsList';
import movieDataFile from './../../data.json';

const Bookmarked = () => {
    
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
                            className="border border-gray-300 p-2 rounded-l focus:outline-none bg-[#10141f] border-none 
                            w-64 pl-4 text-white"
                        />
                    </div>
                    <CardsList
                        searchQuery={searchQuery}
                        trendingMovies={trendingMovies}
                        recommendedMovies={recommendedMovies}
                        queriedMovies={queriedMovies}
                    />
                </div>

            </div>
        </div>
    );
};

export default Bookmarked;