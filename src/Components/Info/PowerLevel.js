import React, {Component} from 'react';
import {PieChart} from "react-minimal-pie-chart";
import "../../Assets/Styles/InfoComponents/PowerLevel.css"

class PowerLevel extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="power-level">
                <PieChart
                    data={[
                        {title: "Мощность", value: this.props.level, color: '#1894d5'},
                        {title: "Мощность", value: 100 - this.props.level, color: '#9d9d9d'}
                    ]}
                    lineWidth={30}
                    startAngle={180}
                    lengthAngle={180}
                    animationDuration={500}
                />
                <div className="power-level-caption">
                    Мощность привода: {this.props.level}%
                </div>
            </div>
        );
    }
}

export default PowerLevel;
