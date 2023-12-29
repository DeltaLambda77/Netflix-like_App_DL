import React, { useEffect } from "react";
import Sidebar from './../components/Sidebar';
import CardsList from './../components/CardsList';

const Home = () => {
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
                            className="border border-gray-300 p-2 rounded-l focus:outline-none bg-[#10141f] border-none 
                            w-64 pl-4"
                        />
                    </div>
                    <CardsList />
                </div>

            </div>
        </div>
    );
};

export default Home;