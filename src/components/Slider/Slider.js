import React, {Component} from 'react';
import './Slider.css';
import Slide from "../Slide/Slide";
import LeftArrow from "../Arrows/LeftArrow";
import RightArrow from "../Arrows/RightArrow";
import imageUrls from "./imagesArray.js";

class Slider extends Component {

    state = {
        images: imageUrls,
        curIndex: 0,
        translateValue: 0
    };

    goToPrevSlide = () => {
        this.setState(prevState => ({
            curIndex: prevState.curIndex !== 0 ? prevState.curIndex - 1 : prevState.images.length
        }))
    };

    goToNextSlide = () => {
        this.setState(prevState => ({
            curIndex: prevState.curIndex !== prevState.images.length ? prevState.curIndex + 1 : 0
        }))

        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
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
            <div className="Slider">
                <div
                    className="imagesWrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}
                >
                    {
                        this.state.images.map((image, index) => (
                            <Slide key={index} image={image}/>
                        ))
                    }
                </div>

                <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
                <RightArrow gotToNextSlide={this.goToNextSlide}/>
            </div>
        );
    }
}



export default Slider;
