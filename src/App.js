import React, {Component} from 'react'
import Swal from 'sweetalert2'


import AppContainer from "./Components/Common/AppСontainer"
import Header from "./Components/Header"
import Infobar from "./Components/Infobar"
import SignalLevel from "./Components/Info/SignalLevel"
import PowerLevel from "./Components/Info/PowerLevel"
import ChargeLevel from "./Components/Info/ChargeLevel"
import DeviceInfo from "./Components/DeviceInfo"
import Map from "./Components/Map"

import "./Assets/Styles/App.css"
import FlexContainer from "./Components/Common/FlexContainer";

class App extends Component {
    constructor(props) {
        super(props);
        // this.func = this.func.bind(this);
        this.updateData = this.updateData.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.state = {
            signalLevel: 98,
            powerLevel: 0,
            chargeLevel: 80,
            deviceInfo: {
                link_ok: false,
                executing: false,
            },
            devicePosition: {
                x_position: 0,
                y_position: 0,
                theta: 0,
                x_max: 3000,
                y_max: 2000
            },
        }
        this.host_check = true
        this.base_url = "http://127.0.0.1:5000/api/v1.0/"

        setTimeout(() =>setInterval(this.updateData,200), 2000)
    }

    handleSwitch(){
        console.log("onSwitch: app")
        let tDI = this.state.deviceInfo
        tDI['executing'] = !tDI['executing']
        this.setState({deviceInfo: tDI})
        fetch(this.base_url+"switch_state")
            .then(response => response.json())
            .then(data => {
                console.log("Switched State")
            });
    }

    componentDidMount() {
        Swal.fire({
            title: 'Подключиться к удалённому хосту?',
            showDenyButton: true,
            confirmButtonText: 'Да',
            denyButtonText: `Оставить локальный`,
        }).then((result) => {
            if (result.isConfirmed) {
                this.base_url = "http://rpi.local:5000/api/v1.0/"
            } else if (result.isDenied) {
                this.base_url = "http://localhost:5000/api/v1.0/"
            }
            if (this.host_check){
                let response = fetch(this.base_url+"check").then(response => {
                    this.host_check = false
                    if(!response.ok){
                        Swal.fire({
                            title: 'OmegaRIG не в сети',
                            text: 'Подключите OmegaRIG и компьютер к одной локальной сети, затем перезапустите приложение',
                            icon: 'error',
                            confirmButtonText: 'Ок'
                        })
                    }else{
                        let tDI = this.state.deviceInfo
                        tDI['link_ok'] = true
                        this.setState({deviceInfo: tDI})
                        Swal.fire({
                            title: 'OmegaRIG в сети',
                            text: 'Соединение установлено',
                            icon: 'success',
                            confirmButtonText: 'Ок'
                        })
                    }
                    return response.json()
                }).then(data => {
                    console.log(data)
                }).catch(err => {
                    this.host_check = false
                    Swal.fire({
                        title: 'OmegaRIG не в сети',
                        text: 'Подключите OmegaRIG и компьютер к одной локальной сети, затем перезапустите приложение',
                        icon: 'error',
                        confirmButtonText: 'Ок'
                    })
                })
            }
        })


    }

    updateData(){
        if (this.state.deviceInfo.link_ok){
            fetch(this.base_url+"get_data")
                .then(response => response.json())
                .then(data => {
                    let tDP = this.state.devicePosition
                    tDP['x_position'] = Number(data.x_pos)
                    tDP['y_position'] = Number(data.y_pos)
                    tDP['theta'] = data.theta
                    this.setState({
                        devicePosition: tDP,
                        signalLevel: data.signal,
                        powerLevel: data.power,
                        chargeLevel: data.charge
                    })
                });
        }
    }

    render() {
        return (
            <AppContainer className="app-container">
                <FlexContainer width="100" height="100" direction="column">
                    <Header/>
                    <FlexContainer width="100" height="90" direction="row">
                        <Infobar>
                            <SignalLevel level={this.state.signalLevel}/>
                            <PowerLevel level={this.state.powerLevel}/>
                            <ChargeLevel level={this.state.chargeLevel}/>
                        </Infobar>
                        <Map position={this.state.devicePosition}/>
                    </FlexContainer>
                </FlexContainer>
                <DeviceInfo info={this.state.deviceInfo} handler={this.handleSwitch}/>
            </AppContainer>
        );
    }
}

export default App;
