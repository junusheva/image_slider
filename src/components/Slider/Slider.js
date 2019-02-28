import React, {Component} from 'react';
import './Slider.css';
import Slide from "../Slide/Slide";
import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";

class Slider extends Component {

    render() {
        return (
            <div className="Slider">
                <Slide/>

                <LeftArrow/>
                <RightArrow/>
            </div>
        );
    }
}



export default Slider;
