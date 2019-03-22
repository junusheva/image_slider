import React, {Component} from 'react';
import EditedImage from "./EditedImage/EditedImage";
import "./ImageEditor.css";
import EditingInstruments from "./EditingInstruments/EditingInstruments";

class ImageEditor extends Component {
    state = {
        positionX: 50,
        positionY: 0
    };

    handleX = handler => {
        this.setState(prevState => {
            if(prevState.positionX !== handler.value) {
                return {positionX: handler.value}
            }
        });
    };

    handleY = handler => {
        this.setState(prevState => {
            if(prevState.positionY !== handler.value) {
                return {positionY: handler.value}
            }
        });

    };
    render() {
        return (
            <div className={"ImageEditorContainer"}>
                <EditedImage
                    positionX={this.state.positionX}
                    positionY={this.state.positionY}
                />
                <EditingInstruments
                    handleX={this.handleX}
                    handleY={this.handleY}
                />
            </div>

        )
    }
}

export default ImageEditor;