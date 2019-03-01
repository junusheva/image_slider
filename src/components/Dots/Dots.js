import React from 'react';
import Dot from "./Dot";
import './Dots.css';

const Dots = ({images, activeImageIndex, handleDotClick}) => (
    <div className={"dotsWrapper"}>
        {
            images.map((image, dotIndex) => (
                <Dot
                    key={dotIndex}
                    clicked={activeImageIndex === dotIndex}
                    handleDotClick={handleDotClick}
                    activeImageIndex={activeImageIndex}
                    dotIndex={dotIndex}
                />
            ))
        }
    </div>
);

export default Dots;