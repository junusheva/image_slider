import React from 'react';

const EditedImage = props => {
    const imageStyle = {
        backgroundPositionX: `${props.positionX}%`,
        backgroundPositionY: `${props.positionY}%`
    };

    return (
        <div className={"EditedImageContainer"}>
            <div className={"EditedImage"} style={imageStyle}></div>
        </div>

    );
};

export default EditedImage;