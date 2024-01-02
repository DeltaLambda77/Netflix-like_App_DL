import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HoverableImage from './HoverableImage';


const Sidebar = () => {

    return (
        <div className="fixed rounded-md flex flex-col justify-between h-2/3 bg-[#181c2c] my-6 mx-6 bg-#161d2f items-center p-6">
            <div className="flex flex-col justify-center items-center">
                <img className="mb-12 mt-4" src={'./assets/logo.svg'} />
                <Link to="/Home">
                    <img className="my-4" src={'./assets/icon-nav-home.svg'} />
                </Link>
                <Link to="/Movies">
                    <HoverableImage initialIcon={'./assets/icon-nav-movies.svg'} hoveredIcon={'./assets/icon-category-movie.svg'}/>
                </Link>
                <Link to="/TV_Series">
                    <HoverableImage initialIcon={'./assets/icon-nav-tv-series.svg'} hoveredIcon={'./assets/icon-category-tv.svg'}/>
                </Link>
                <Link to="/Bookmarked_Movies">
                    <HoverableImage initialIcon={'./assets/icon-nav-bookmark.svg'} hoveredIcon={'./assets/icon-bookmark-full.svg'}/>
                </Link>
                
            </div>
                
            <div>
                <img className="align-bottom h-8 border-2 border-white rounded-full" src={'./assets/image-avatar.png'} alt="user avatar" />                
            </div> 
        </div>
    );
}

export default Sidebar;