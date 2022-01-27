import React from 'react';
import Slider_RGB from './Slider_RGB';

class Sliders extends React.Component {

    constructor(props) {
        super(props);

        this.change_state = this.change_state.bind(this);

        this.state = {
            r: 0,
            g: 0,
            b: 0
        }
    }

    change_state(color, value) {
        this.setState({[color]: value});

        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Slider_RGB id="r" change_state={this.change_state}/>
                <Slider_RGB id="g" change_state={this.change_state}/>
                <Slider_RGB id="b" change_state={this.change_state}/>
            </div>
        );
    }
}
export default Sliders;