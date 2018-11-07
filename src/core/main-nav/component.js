import React from 'react';
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './component.css';

export const MainNav = props => {
    return (
        <div className="main-nav">
            <Navbar color="dark" expand="md" dark>
                <NavbarBrand href="/">liveCoding</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink exact to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/users">Users</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}