import React from 'react';

const LeftArrow = props => (
    <div className="leftArrow" onClick={props.goToPrevSlide}>
        <i className="fas fa-angle-left"/>
    </div>

);

export default LeftArrow;