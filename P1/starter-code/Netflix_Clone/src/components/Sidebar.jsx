import React, { useState } from 'react';
import HoverableImage from './HoverableImage';

const Sidebar = () => {

    return (
        <div className="fixed rounded-md flex flex-col justify-between h-2/3 bg-[#181c2c] my-6 mx-6 bg-#161d2f items-center p-6">
            <div className="flex flex-col justify-center items-center">
                <img className="mb-12 mt-4" src={'./assets/logo.svg'} />
                <img className="my-4" src={'./assets/icon-nav-home.svg'} />
                <HoverableImage initialIcon={'./assets/icon-nav-movies.svg'} hoveredIcon={'./assets/icon-category-movie.svg'}/>
                <HoverableImage initialIcon={'./assets/icon-nav-tv-series.svg'} hoveredIcon={'./assets/icon-category-tv.svg'}/>
                <HoverableImage initialIcon={'./assets/icon-nav-bookmark.svg'} hoveredIcon={'./assets/icon-bookmark-full.svg'}/>
            </div>
                
            <div>
                <img className="align-bottom h-8 border-2 border-white rounded-full" src={'./assets/image-avatar.png'} alt="user avatar" />                
            </div> 
        </div>
    );
}

export default Sidebar;