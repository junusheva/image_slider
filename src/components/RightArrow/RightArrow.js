import React from 'react';

const RightArrow = props => (
    <div className="RightArrow" onClick={props.goToNextSlide}>
        <i className="fas fa-angle-left"/>
    </div>

);

export default RightArrow;