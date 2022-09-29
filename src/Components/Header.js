import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";

import logo from "../Assets/Img/logo.png";

import "../Assets/Styles/Header.css"


class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar.Brand href="/" className="navbar-brand">
                    <img
                        src={logo}
                        className="logo-img"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <div className="header-caption">
                    Положение робота:
                </div>
            </div>
        );
    }
}

export default Header;
