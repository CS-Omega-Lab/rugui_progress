import React, {Component} from 'react';
import '../Assets/Styles/Map.css';
import arrow from '../Assets/Img/next.png';
import anchors from '../Assets/Img/anchors.png';


class Map extends Component {

    constructor(props) {
        super(props);
        this.x_position = props.position.x_position
        this.y_position = props.position.y_position
        this.theta = props.position.theta
        this.x_max = props.position.x_max
        this.y_max = props.position.y_max
    }

    doUpdate() {
        const root = document.querySelector(':root');
        root.style.setProperty('--x-pos', (this.x_position / this.x_max * 80) + '%');
        root.style.setProperty('--y-pos', (this.y_position / this.y_max * 93) + '%');
        root.style.setProperty('--angle', (this.theta) + 'deg');
    }

    componentDidMount() {
        this.doUpdate()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.doUpdate()
    }

    render() {
        return (
            <div className="grid_map">
                <img className="map" src={anchors} alt="Map"
                     width="100%"/>
                <img className="robot_xy" src={arrow} alt="robot"/>
            </div>
        );
    }
}

export default Map;
