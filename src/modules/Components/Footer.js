import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './Styles/Footer_and_header/Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="main-footerPK">
                <Container>
                    {/*<div className="footer-links">*/}
                    {/*    <a href="">Link1</a>*/}
                    {/*    <a href="">Link2</a>*/}
                    {/*    <a href=" ">Something</a>*/}
                    {/*    <a href=" ">Something</a>*/}
                    {/*</div>*/}

                    <div className="row">
                        <p className="copyright">
                            Omega &copy; {new Date().getFullYear() - 0}-{new Date().getFullYear()} | All
                            rights reserved
                        </p>
                    </div>
                </Container>
            </div>
        )

    }

}


