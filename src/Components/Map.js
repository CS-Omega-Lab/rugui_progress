import React, {Component} from 'react';
import '../Assets/Styles/Map.css';
import arrow from '../Assets/Img/next.png';
import anchors from '../Assets/Img/anchors.png';


class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x_position : props.position.x_position,
            y_position : props.position.y_position,
            theta : props.position.theta,
            x_max : props.position.x_max,
            y_max : props.position.y_max,
        }

        this.doUpdate = this.doUpdate.bind(this);
        this.doUpdate()
    }

    doUpdate() {
        const root = document.querySelector(':root');
        root.style.setProperty('--x-pos', (this.state.x_position / this.state.x_max * 80) + '%');
        root.style.setProperty('--y-pos', (this.state.y_position / this.state.y_max * 93) + '%');
        root.style.setProperty('--angle', (this.state.theta) + 'deg');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            x_position: nextProps.position.x_position,
            y_position: nextProps.position.y_position,
            theta: nextProps.position.theta,
        }
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
