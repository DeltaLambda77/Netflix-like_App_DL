import React, { useState } from 'react';

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
        </div>
    );
}

export default Sidebar;