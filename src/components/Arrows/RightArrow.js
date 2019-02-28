import React from 'react';
import './Arrows.css';

const RightArrow = props => (
    <div className="rightArrow" onClick={props.goToNextSlide}>
        <i className="fas fa-angle-right"/>
    </div>

);

export default RightArrow;