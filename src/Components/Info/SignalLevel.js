import React, {Component} from 'react';
import {PieChart} from "react-minimal-pie-chart";
import "../../Assets/Styles/InfoComponents/SignalLevel.css"

class SignalLevel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="signal-level">
                <PieChart
                    data={[
                        {title: "Сигнал", value: this.props.level, color: '#1894d5'},
                        {title: "Сигнал", value: 100 - this.props.level, color: '#9d9d9d'}
                    ]}
                    lineWidth={30}
                    startAngle={180}
                    lengthAngle={180}
                    animationDuration={500}
                />
                <div className="signal-level-caption">
                    Уровень сигнала: {this.props.level}%
                </div>
            </div>
        );
    }
}

export default SignalLevel;
