import React, {Component} from 'react';
import "../Assets/Styles/Infobar.css"

class Infobar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="infobar">
                {this.props.children}
            </div>
        );
    }
}

export default Infobar;
