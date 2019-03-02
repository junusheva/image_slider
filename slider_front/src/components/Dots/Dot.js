import React from 'react';

const Dot = ({clicked, handleDotClick, dotIndex}) => {
    const dotClass = clicked ? "clickedDot" : "inactiveDot";
    return (
        <div
            className={dotClass}
            onClick={() => handleDotClick(dotIndex)}
        >

        </div>
    );
};

export default Dot;