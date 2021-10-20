import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/login">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutus">Aboutus</Nav.Link>
                        <Nav.Link as={HashLink} to="/register">Register</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Header;