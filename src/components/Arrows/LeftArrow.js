import React from 'react';
import './Arrows.css';

const LeftArrow = props => (
    <div className="leftArrow" onClick={props.goToPrevSlide}>
        <i className="fas fa-angle-left"/>
    </div>

);

export default LeftArrow;