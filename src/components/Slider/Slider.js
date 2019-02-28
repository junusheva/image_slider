import React, {Component} from 'react';
import './Slider.css';
import Slide from "../Slide/Slide";
import LeftArrow from "../Arrows/LeftArrow";
import RightArrow from "../Arrows/RightArrow";
import imageUrls from "./imagesArray.js";

class Slider extends Component {

    state = {
        images: imageUrls,
        currentIndex: 0,
        translateValue: 0
    };

    goToPrevSlide = () => {
        console.log(this.state.images);
        if(this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: this.state.images.length - 1,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));
    };

    goToNextSlide = () => {
        console.log(this.state.translateValue, this.state.currentIndex);
        if(this.state.currentIndex === this.state.images.length - 1) {
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
                        transition: 'transform ease-out 0.45s',
                        position: 'relative'
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
            </div>
        );
    }
}



export default Slider;
