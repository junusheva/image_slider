import React, {Component} from 'react';
import './Slider.css';
import Slide from "../Slide/Slide";
import LeftArrow from "../LeftArrow/LeftArrow";
import RightArrow from "../RightArrow/RightArrow";
import imageUrls from "./imagesArray.js";

class Slider extends Component {

    state = {
        images: imageUrls,
        curIndex: 0
    };

    goToPrevSlide = () => {

    };

    goToNextSlide = () => {

    };

    render() {
        return (
            <div className="Slider">
                <Slide/>

                <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
                <RightArrow gotToNextSlide={this.goToNextSlide}/>
            </div>
        );
    }
}



export default Slider;
