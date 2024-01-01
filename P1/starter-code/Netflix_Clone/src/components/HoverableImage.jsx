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
    );
}

export default HoverableImage;