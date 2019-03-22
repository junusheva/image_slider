import React, {Component} from 'react';
import ImageEditor from "./components/Editor/ImageEditor";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from "./components/Slider/Slider";
import "react-tabs/style/react-tabs.css";


class App extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>Image Editor</Tab>
                    <Tab>Image Slider</Tab>
                </TabList>
                <TabPanel>
                    <ImageEditor/>
                </TabPanel>
                <TabPanel>
                    <Slider/>
                </TabPanel>

            </Tabs>
        );
    }
}

export default App;
