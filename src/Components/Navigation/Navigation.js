import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navigation = () => {
    
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to="/">Firebase Auth</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                        {
                            user ?
                            <NavLink className="nav-link ms-4 btn btn-danger tex-light" to="/signin" onClick={handleSignOut}>Sign Out</NavLink>
                            :
                            <NavLink className="nav-link btn btn-success ms-4" to="/signin">Sign in</NavLink>
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;