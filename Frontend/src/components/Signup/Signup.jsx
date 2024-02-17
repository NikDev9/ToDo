import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from 'react-router-dom';
import { Url } from '../../constants/global';

export default function Signup () {
    
    const nav = useNavigate();
    const [formData, setFormData] = useState({ email: '', name: '', password: '' });

    function handleChange (event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit (event) {
        try {
            event.preventDefault();
            
            const hashedPassword = await bcrypt.hash(formData.password, 10);
            let user = {"email": formData.email, "name": formData.name, "password": hashedPassword, "admin": 0};
            let data = JSON.stringify(user);
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: data,
            };

            //Call POST API to create user
            fetch(`${Url}/api/users/`, options)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                localStorage.setItem('user_id', data.user_id);
                nav('/mylist', {state: {user_id: data.user_id}});
            });
        } catch (error) {
            console.error('Error:', error);
        }
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
