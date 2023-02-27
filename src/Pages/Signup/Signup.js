import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        createUserWithEmailAndPassword,
  user,
  loading,
  error,] = useCreateUserWithEmailAndPassword(auth);
  const messageDiv = document.getElementById("messageDiv");
    if (error) {
        messageDiv.innerHTML = `Error: ${error.message}`;
    }
    if (loading) {
        messageDiv.innerHTML = "Loading...";
    }
    if (user) {
        messageDiv.innerHTML = `Registered User: ${user.user.email}`
    }
    return (
        <>
            <section className='signup-area py-5'>
                <Container>
                    <Row>
                        <Col lg={6} className='offset-lg-3'>
                            <h1 className='text-start display-3 mt-5'>Sign Up</h1>
                            <p className='mb-4 text-muted'>Create an account.</p>
                                                   
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <div id="messageDiv" className='py-2 text-success'></div>
                            <Button variant="primary" onClick={() => createUserWithEmailAndPassword(email, password)}>
                                Sign up
                            </Button>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Signup;