import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import "../Assets/Styles/DeviceInfo.css";
import '../Assets/Styles/Vendor/bootstrap.min.css';

class DeviceInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: "не подключено",
            executing: "не выполняется",
            button_text: "Старт",
            button_state: "disabled"
        }
        this.handleClick = this.handleClick.bind(this);

    }

    static getDerivedStateFromProps(nextProps, prevState) {

        let connectedDerived
        let executingDerived
        let button_stateDerived
        let button_textDerived

        if (nextProps.info.link_ok === 1) {
            connectedDerived = "подключено"
            button_stateDerived = false
        } else {
            connectedDerived = "не подключено"
            button_stateDerived = true
        }
        if (nextProps.info.executing === 1) {
            executingDerived = "выполняется"
            button_textDerived = "Стоп"
        } else {
            executingDerived = "не выполняется"
            button_textDerived = "Старт"
        }

        return {
            connected: connectedDerived,
            executing: executingDerived,
            button_text: button_textDerived,
            button_state: button_stateDerived
        }
    }

    handleClick(e) {
        //this.props.onSwitchExec()
        console.log("onSwitch")
    }


    render() {
        return (
            <div className="device-info">
                <div className="device-info-link">Статус соединения: {this.state.connected}</div>
                <div className="device-info-exec">Статус выполнения: {this.state.executing}</div>
                <Button variant="primary" onClick={this.handleClick}
                        disabled={this.state.button_state}>{this.state.button_text}</Button>
            </div>
        );
    }
}

export default DeviceInfo;
