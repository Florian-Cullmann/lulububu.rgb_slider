import React from 'react';
import Slider, { Range } from 'rc-slider';

class Slider_RGB extends React.Component {
    render() {
        return (
            <Slider
                max="255"
                id={this.props.id}
                onChange={(e) => this.props.change_state(this.props.id, e)}
            />
        );
    }
}
export default Slider_RGB;