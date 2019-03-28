import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Header = () => (
    <Navbar style={{ margin: '0 0 0 0' }}>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Apharan</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#contest">
                Contest
            </NavItem>
        </Nav>
    </Navbar>
);

export default Header;