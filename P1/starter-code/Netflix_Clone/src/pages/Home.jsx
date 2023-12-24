import React, { useEffect } from "react";
import Sidebar from './../components/Sidebar';
import searchIcon from './../assets/icon-search.svg';
import CardsList from './../components/CardsList';

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-[#10141f]">
                <div className="flex items-center">
                    <img className="align-bottom h-8" src={searchIcon} alt="search-icon" />                
                    <input
                        type="text"
                        placeholder="Search for movies or TV series"
                        className="border border-gray-300 p-2 rounded-l focus:outline-none bg-[#10141f] border-none 
                        w-64"
                    />
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Card Component Example</h1>
                <CardsList />
            </div>
        </div>
    );
};

export default Home;