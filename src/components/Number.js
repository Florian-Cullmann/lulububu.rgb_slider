import React from 'react';

class Number extends React.Component {
    render() {
        return (
            <input
                type="text"
                className="form-control"
                id={this.props.id} readOnly
                value="0"
            />
        );
    }
}
export default Number;