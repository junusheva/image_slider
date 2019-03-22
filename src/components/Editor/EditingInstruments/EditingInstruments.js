import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const EditingInstruments = props => {


    return (
        <div className={"EditingInstrumentsContainer"}>
            <p>Position X</p>
            <Slider handle={props.handleX} defaultValue={50} min={0} max={100}/>
            <p>Position Y</p>
            <Slider handle={props.handleY} defaultValue={0} min={0} max={100}/>
        </div>

)
};
export default EditingInstruments;
