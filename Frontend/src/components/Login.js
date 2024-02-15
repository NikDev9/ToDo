import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit (event) {
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <div>
            <h2 id="white">Login</h2>
            <Form onSubmit={handleSubmit} id="spacing">
                <Form.Group id="spacing">
                    <Form.Label id="white">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group id="spacing">
                    <Form.Label id="white">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-light" type="submit" id="submitButton">Submit</Button>
            </Form>

            <Link id="white" to="/signup">Not a user? Signup</Link>
        </div>
    );
}