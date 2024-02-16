import { Card, Button, Table, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import SingleUser from './SingleUser';

export default function AllUsers () {

    const [users, setUsers] = useState([{'id': 1, 'email': 'a@f.com', 'name': 'aste'},{'id': 2, 'email': 'asa@f.com', 'name': 'asdste'}]);
    const [addUser, setAddUser] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleAddUser () {
        setAddUser((add) => !addUser);
    }

    function handleSubmit (event) {
        console.log('Email:', email);
        console.log('Password:', password);
    }
    
    return (
        <Card>
            <Card.Header id="cardHeader">Users</Card.Header>
            <Card.Body>
                <Table striped>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) => (
                            <SingleUser key={item.id} item={item}/>
                        ))}
                    </tbody>
                </Table>

                {addUser &&
                    <div>
                        <h4>Enter details for new user</h4>
                        <Form onSubmit={handleSubmit} id="spacing">
                            <Form.Control
                                id="spacing"
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />

                            <Form.Control
                                id="spacing"
                                type="text"
                                placeholder="Name"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            
                            <Form.Control
                                id="spacing"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Form>
                    </div>
                }
                {addUser &&
                    <InputGroup id="buttons">
                        <Button variant="outline-secondary">Save</Button>
                        <Button variant="outline-secondary" onClick={handleAddUser}>Cancel</Button>
                    </InputGroup>
                }
                {!addUser && 
                    <Button onClick={handleAddUser} variant="secondary"><BsPlusCircleFill/> Add user</Button>
                }

            </Card.Body>
        </Card>
    );
}