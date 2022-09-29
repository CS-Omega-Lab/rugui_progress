import React, {Component} from 'react';
import {PieChart} from "react-minimal-pie-chart";
import "../../Assets/Styles/InfoComponents/ChrageLevel.css"

class ChargeLevel extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="charge-level">
                <PieChart
                    data={[
                        {title: "Заряд", value: this.props.level, color: '#1894d5'},
                        {title: "Заряд", value: 100 - this.props.level, color: '#9d9d9d'}
                    ]}
                    lineWidth={30}
                    startAngle={180}
                    lengthAngle={180}
                    animationDuration={500}
                />
                <div className="charge-level-caption">
                    Уровень заряда: {this.props.level}%
                </div>
            </div>
        );
    }
}

export default ChargeLevel;
