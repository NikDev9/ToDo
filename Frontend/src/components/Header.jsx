import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function Header () {

    const nav = useNavigate();
    const location = useLocation();
    const [signoutBtn, setSignoutBtn] = useState(false);
    
    useEffect(() => {
        if(location.pathname == '/mylist' || location.pathname == '/users')
            setSignoutBtn((set) => true);
    }, [location]);

    function handleSignout () {
        localStorage.clear();
        nav('/');
    }

    return (
        <Navbar id="header" bg="light" expand="lg">
            <Navbar.Brand id="headerTitle" href="#home">To Do</Navbar.Brand>
            {signoutBtn &&
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
