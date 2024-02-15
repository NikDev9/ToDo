import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Signup () {
    
    const [formData, setFormData] = useState({ email: '', name: '', password: '' });

    function handleChange (event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit (event) {
        console.log('Signup form submitted:', formData);
    }

    return (
        <div>
            <h2 id="white">Signup</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="spacing">
                    <Form.Label id="white">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group id="spacing">
                    <Form.Label id="white">Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group id="spacing">
                    <Form.Label id="white">Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="outline-light" type="submit" id="submitButton">Submit</Button>
            </Form>

            <Link id="white" to="/">Already a user? Login</Link>
        </div>
    );
}
