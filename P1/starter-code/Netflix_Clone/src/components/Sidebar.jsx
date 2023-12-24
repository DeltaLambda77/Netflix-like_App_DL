import React, { useState } from 'react';
import imageAvatar from './../assets/image-avatar.png';
import grayBookmark from './../assets/icon-bookmark-full.svg';
import whiteBookmark from './../assets/icon-nav-bookmark.svg';
import whiteMovieIcon from './../assets/icon-category-movie.svg';
import grayMovieIcon from './../assets/icon-nav-movies.svg';
import homeIcon from './../assets/icon-nav-home.svg';
import grayTVIcon from './../assets/icon-nav-tv-series.svg';
import whiteTVIcon from './../assets/icon-category-tv.svg';
import playIcon from './../assets/logo.svg';

const HoverableImage = ({ initialIcon, hoveredIcon }) => {
    const [imageSrc, setImageSrc] = useState(initialIcon);

    const handleMouseOver = () => {
        setImageSrc(hoveredIcon);
    };

    const handleMouseOut = () => {
        setImageSrc(initialIcon);
    };

    return (
        <img 
            className="my-4 h-5 object-cover"
            src={imageSrc}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            alt="img-icon"
        />
    )
}

const Sidebar = () => {

    return (
        <div className="top-0 left-0 h-screen w-1/12 m-0 flex flex-col bg-[#10141f] text-white shadow-lg items-center">
            <div className="rounded-md flex flex-col justify-between h-2/3 bg-[#181c2c] my-5 bg-#161d2f items-center p-6">
                <div className="flex flex-col justify-center items-center">
                    <img className="mb-12 mt-4" src={playIcon} />
                    <img className="my-4" src={homeIcon} />
                    <HoverableImage initialIcon={grayMovieIcon} hoveredIcon={whiteMovieIcon}/>
                    <HoverableImage initialIcon={grayTVIcon} hoveredIcon={whiteTVIcon}/>
                    <HoverableImage initialIcon={whiteBookmark} hoveredIcon={grayBookmark}/>
                </div>
                  
                <div>
                    <img className="align-bottom h-8 border-2 border-white rounded-full" src={imageAvatar} alt="user avatar" />                
                </div> 
            </div>
        </div>
    );
}

export default Sidebar;