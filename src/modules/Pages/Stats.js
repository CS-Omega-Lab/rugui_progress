import {Component} from "react";
import Footer from '../Components/Footer';
import stats_data from "../../../../../OneDrive/Рабочий стол/src/Stats.json";
import '../Components/Styles/Styles.css';
import {PieChart} from 'react-minimal-pie-chart';



export default class Gallery extends Component {
    battery = stats_data.battery;
    battery_status = stats_data.battery_status;
    battery_voltage = stats_data.battery_voltage;
    left_speed = stats_data.left_speed;
    right_speed = stats_data.right_speed;
    x_position = stats_data.x_position;
    y_position = stats_data.y_position;
    theta = stats_data.theta;
    status = stats_data.status;
    left_fin = stats_data.left_fin;
    right_fin = stats_data.right_fin;

    render() {
        return (
            <>
                {/*    read battery data from json*/}
                <div className="grid4x4">
                    Статус: {this.status}
                    <div className="battery">
                        <PieChart
                            data={[
                                {title: "Уроверь заряда", value: this.battery, color: '#00CC00'},
                                {title: "Уроверь разряда", value: 100 - this.battery, color: '#C13C37'},
                            ]}
                            lineWidth={50}
                            startAngle={140}
                            lengthAngle={260}
                            animationDuration={500}
                        />
                        <div className="center_battery">
                            Уровень заряда: {this.battery}%
                        </div>
                    </div>
                    <div className="battery_info">
                        Текущее напряжение: {this.battery_voltage} В
                        {this.battery_status === "charging" && (
                            <div className="charging">
                                <div className="green_text">Идет зарядка.</div>
                                <div> Примерное время до окончания зарядки:</div>
                                <div
                                    className="green_text">{Math.floor(((100 - this.battery) * 300 / 100) / 60)} часа(ов), {((100 - this.battery) * 300 / 100) % 60} минут(ы)
                                </div>
                            </div>
                        )
                        }
                    </div>

                    <div className="left_speed">
                        <PieChart
                            data={[
                                {title: "Скорость", value: this.left_speed, color: '#00CC00'},
                                {title: "Скорость", value: 100 - this.left_speed, color: '#C13C37'}
                            ]}
                            lineWidth={30}
                            startAngle={180}
                            lengthAngle={180}
                            animationDuration={500}

                        />
                        <div className="center_speed">
                            Скорость левых шасси: {this.left_speed}%
                        </div>
                    </div>

                    <div className="right_speed">
                        <PieChart
                            data={[
                                {title: "Скорость", value: this.right_speed, color: '#00CC00'},
                                {title: "Скорость", value: 100 - this.right_speed, color: '#C13C37'}
                            ]}
                            lineWidth={30}
                            startAngle={180}
                            lengthAngle={180}
                            animationDuration={500}

                        />
                        <div className="center_speed">
                            Скорость правых шасси: {this.right_speed}%
                        </div>
                    </div>

                    <div className="left_fin">
                        <PieChart
                            data={[
                                {title: "Угол", value: this.left_fin, color: '#00CC00'},
                                {title: "Угол", value: 360 - this.left_fin, color: '#3c3f41'}
                            ]}
                            lineWidth={10}
                            startAngle={180}
                        />
                        <div className="center_fin">Текущий угол левого плавника относительно
                            горизонта: {this.left_fin}°
                        </div>
                    </div>

                    <div className="right_fin">
                        <PieChart
                            data={[
                                {title: "Угол", value: this.right_fin, color: '#00CC00'},
                                {title: "Угол", value: 360 - this.right_fin, color: '#3c3f41'}
                            ]}
                            lineWidth={10}
                            startAngle={180}
                        />

                        <div className="center_fin">Текущий угол правого плавника относительно
                            горизонта: {this.right_fin}°
                        </div>
                    </div>

                    <div className="robot_position">
                        Текущая позиция: ({this.x_position}, {this.y_position})
                        Текущий угол относительно севера: {this.theta}°

                    </div>
                    <div className="theta_chart">
                        <PieChart data={[
                            {title: "Угол", value: this.theta, color: '#00CC00'},
                            {title: "Угол", value: 360 - this.theta, color: '#3c3f41'}
                        ]}
                                    lineWidth={10}
                                  startAngle={270}
                        />
                    </div>

                </div>


            </>
        );
    }
}
