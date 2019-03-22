import React, {Component} from 'react';

import Dots from "../Dots/Dots";
import Slide from "../Slide/Slide";
import LeftArrow from "../Arrows/LeftArrow";
import RightArrow from "../Arrows/RightArrow";

import './Slider.css';

//An array of image urls
import imageUrls from "./imagesArray.js";

class Slider extends Component {

    state = {
        images: imageUrls,
        currentIndex: 0,
        translateValue: 0,
        autoplayOn: window.setInterval(() => {
            this.goToNextSlide()
        }, 10000)
    };

    goToPrevSlide = () => {
        let {currentIndex, images} = this.state;
        if(currentIndex === 0) {
            return this.setState({
                currentIndex: images.length - 1,
                translateValue:  -(this.slideWidth())* (images.length - 1)
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));
    };

    goToNextSlide = () => {
        let {currentIndex, images} = this.state;
        if(currentIndex === images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));

    };

    handleDotClick = index => {
        console.log("handleDotClick");
        return this.setState({
            currentIndex: index,
            translateValue:  -(this.slideWidth())* (index)
        })
    };

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    };

    render() {
        return (
            <div className="slider">
                <div
                    className="imagesWrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-in 1s',
                    }}
                >
                    {
                        this.state.images.map((image, index) => (
                            <Slide key={index} image={image}/>
                        ))
                    }
                </div>

                <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
                <RightArrow goToNextSlide={this.goToNextSlide}/>
                <Dots
                    images={this.state.images}
                    activeImageIndex={this.state.currentIndex}
                    handleDotClick={this.handleDotClick}
                />
            </div>
        );
    }
}




export default Slider;
