import React from 'react';
import Slider_RGB from './Slider_RGB';

class Sliders extends React.Component {
    render() {
        return (
            <div>
                <Slider_RGB color="r" />
                <Slider_RGB color="g" />
                <Slider_RGB color="b" />
            </div>
        );
    }
}
export default Sliders;