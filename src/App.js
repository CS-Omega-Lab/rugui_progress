import React, {Component} from 'react';
import AppOntainer from "src/modules/support/AppСontainer";

class App extends Component {
    constructor(props) {
        super(props);
        // this.func = this.func.bind(this);
        this.state = {

        }
    }

    render() {
        return (
            <AppOntainer>
                <Header/>
                <Infobar>

                </Infobar>

            </AppOntainer>
        );
    }
}

export default App;
