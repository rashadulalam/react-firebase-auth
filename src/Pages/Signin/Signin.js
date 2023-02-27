import React, { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signin = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const messageDiv = document.getElementById("successMsg");
    
    if(error) {
        messageDiv.classList.remove("text-success");
        messageDiv.classList.add("text-danger");
        messageDiv.innerHTML = "Invalid Email or Password!";
    }

    if(loading) {
        messageDiv.classList.remove("text-danger");
        messageDiv.classList.add("text-success");
        messageDiv.innerHTML = "Checking...";
    }

    if(user) {
        messageDiv.classList.add("text-success");
        messageDiv.classList.remove("text-danger");
        messageDiv.innerHTML = "Login success!";
    }

    return (
        <>
            <section className='signup-area py-5'>
                <Container>
                    <Row>
                        <Col lg={6} className='offset-lg-3'>
                            <h1 className='text-start display-3 my-5'>Sign in to your account</h1>
                            <p className='mb-4' id="successMsg"></p>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <div id="messageDiv" className='py-2 text-success'></div>
                            <Button variant="primary" onClick={() => signInWithEmailAndPassword(email, password)} >
                                Sign in
                            </Button>
                            <div className='d-flex align-items-center'>
                                Don't have account? <Link className='btn btn-link' to="/signup">Create an Account.</Link>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Signin;