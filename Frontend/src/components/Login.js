import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <h2 id="heading">Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="spacing">
                    <Form.Label id="heading">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group id="spacing">
                    <Form.Label id="heading">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Button variant="outline-secondary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}