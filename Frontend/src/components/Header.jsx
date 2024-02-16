import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function Header () {

    const nav = useNavigate();
    const location = useLocation();
    
    const [button, setButton] = useState(true);

    useEffect(() => {
        if(location.pathname == '/' || location.pathname == '/signup')
            setButton((set) => false);
    }, [location]);

    function handleSignout () {
        localStorage.clear();
        nav('/');
    }

    return (
        <Navbar id="header" bg="light" expand="lg">
            <Navbar.Brand id="headerTitle" href="#home">To Do</Navbar.Brand>
            {button &&
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav me-auto">
                    <Button variant="light" onClick={handleSignout}>Sign Out</Button>
                </Nav>
            </Navbar.Collapse>
            }
        </Navbar>
    );
};

export default Header;
