import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Url } from '../constants/global';

export default function Login () {
    
    const nav = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState('');

    async function handleSubmit (event) {
        event.preventDefault();
        try {
            let data = JSON.stringify({"email": email, "password": password});
            let options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: data,
            };

            //Call login API
            fetch(`${Url}/api/login`, options)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if(data.message) {
                    setAlert(data.message);
                }
                else {
                    localStorage.setItem('user_id', data.user_id);
                    if(data.admin)
                        nav('/users', {state: {user_id: data.user_id}});
                    else
                        nav('/mylist', {state: {user_id: data.user_id}});
                }
            });
        }catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <h2 id="white">Login</h2>
            
            {alert != '' && 
                <Alert variant="danger">
                    {alert}
                </Alert>
            }
            
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