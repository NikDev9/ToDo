import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {

    return (
        <Navbar id="header" bg="light" expand="lg">
            <Navbar.Brand id="headerTitle" href="#home">To Do</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav me-auto">
                    <Button variant="light">Sign Out</Button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
