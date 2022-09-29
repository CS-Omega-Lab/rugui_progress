import React, {Component} from 'react';
import "../../Assets/Styles/Common/FlexContainer.css"

class FlexContainer extends Component {
    constructor(props) {
        super(props);

        this.divStyle = {
            flexDirection: props.direction,
            width: props.width + 'vw',
            height: props.height + 'vh',
        }
    }

    render() {
        return (
            <div style={this.divStyle} className="flex-container">
                {this.props.children}
            </div>
        );
    }
}

export default FlexContainer;
