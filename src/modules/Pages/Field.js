import React, {Component, useState} from 'react';
import '../Components/Styles/Fonts.css';
import '../Components/Styles/Pages/Field.css';
import stats_data from "../../../../../OneDrive/Рабочий стол/src/Stats.json";
import arrow from '../Components/Pictures/arrow.png';

var x_position = stats_data.x_position;
var y_position = stats_data.y_position;
var theta = stats_data.theta;
var x_max = stats_data.x_max;
var y_max = stats_data.y_max;

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
root.style.setProperty('--x-pos', (x_position/x_max*100) + '%');
root.style.setProperty('--y-pos', (y_position/y_max*100) + '%');
root.style.setProperty('--angle', (theta) + 'deg');

export default class Home extends Component {


    render() {
        return (
            <>
                <div className="grid_map">
                    <img className="map" src="https://miro.medium.com/max/1200/1*BQ3-4yyTXT6qX_BtLkE4ZA.jpeg" alt="Map"
                         width="100%">
                    </img>

                    <img className="robot_xy" src={arrow}>
                    </img>

                </div>
            </>
        )
    }

}
