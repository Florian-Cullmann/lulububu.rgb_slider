import React from 'react';
import Slider, { Range } from 'rc-slider';

class Slider_RGB extends React.Component {
    state = {
        value: 0
    }

    handle_change = (value) => {
        this.setState({ value: value });
    };

    render() {
        console.log(this.state);
        return (
            <Slider
                max="255"
                id={ "slider_" + this.props.color }
                aria-labelledby="label"
                onChange={this.handle_change}
            />
        );
    }
}
export default Slider_RGB;