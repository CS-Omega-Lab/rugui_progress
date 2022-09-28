import React, {Component} from 'react';
import {Container, Navbar, NavLink, Nav, } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import logo from './Pictures/logo.png';
import Home from '../../../../../OneDrive/Рабочий стол/src/Pages/Home';
import Stats from '../../../../../OneDrive/Рабочий стол/src/Pages/Stats';
import Field from '../../../../../OneDrive/Рабочий стол/src/Pages/Field';
import './Styles/Footer_and_header/Header.css';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="navbar">
                    <Container className="main-header">
                        <Navbar.Brand href="/" className="navbar-brand">
                            <img
                                src={logo}
                                height="50"
                                width="200"
                                className="Logo_class"
                                alt="Logo"
                            />
                        </Navbar.Brand>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="Navigation_class">
                                <NavLink href="/" className="links">Главная</NavLink>
                                <NavLink href="/field" className="links">Карта</NavLink>
                                <NavLink href="/stats" className="links">Показатели</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/stats" component={Stats}/>
                        <Route exact path="/field" component={Field}/>
                    </Switch>
                </Router>
            </>
        )
    }
}
