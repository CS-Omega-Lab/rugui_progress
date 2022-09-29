import React, {Component} from 'react'

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
        this.state = {
            signalLevel: 98,
            powerLevel: 0,
            chargeLevel: 80,
            deviceInfo: {
                link_ok: 1,
                executing: 0,
            },
            devicePosition: {
                x_position: 1600,
                y_position: 220,
                theta: 13,
                x_max: 3000,
                y_max: 2000
            },
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
                <DeviceInfo info={this.state.deviceInfo}/>
            </AppContainer>
        );
    }
}

export default App;
