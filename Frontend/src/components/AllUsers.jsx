import { Card, Button, Table, Form, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import SingleUser from './SingleUser';
import bcrypt from 'bcryptjs';
import { Url } from '../constants/global';

export default function AllUsers () {

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});
    const [addUser, setAddUser] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [admin, setAdmin] = useState('');
    const [password, setPassword] = useState('');

    //Fetch all users
    useEffect(() => {
        fetch(`${Url}/api/users`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log('Data', data);
            setUsers(data);
          });
    },  [newUser]);

    //Toggle if admin wants to add user
    function handleAddUser () {
        setAddUser((add) => !addUser);
    }

    //Add new user to the database
    async function handleNewUser (event) {
        event.preventDefault();
        
        //Generate hash before sending to database
        const hashedPassword = await bcrypt.hash(password, 10);
        let user = {"email": email, "name": name, "password": hashedPassword, "admin": admin};
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
            console.log('Data', data);
            handleAddUser();
            setNewUser(user);
        });

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
                        <th>Admin</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) => (
                            <SingleUser key={item.user_id} item={item} refresh={() => setNewUser({})}/>
                        ))}
                    </tbody>
                </Table>
                
                {addUser &&
                    <div>
                        <h4>Enter details for new user</h4>
                        <Form id="spacing" onSubmit={handleNewUser}>
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
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            
                            <Form.Control
                                id="spacing"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />

                            <Form.Control
                                id="spacing"
                                type="text"
                                placeholder="Admin (1 or 0)"
                                value={admin}
                                onChange={(event) => setAdmin(event.target.value)}
                            />
                            <InputGroup id="buttons">
                                <Button variant="outline-secondary" type="submit">Save</Button>
                                <Button variant="outline-secondary" onClick={handleAddUser}>Cancel</Button>
                            </InputGroup>
                        </Form>
                    </div>
                }
                {!addUser && 
                    <Button onClick={handleAddUser} variant="secondary"><BsPlusCircleFill/> Add user</Button>
                }

            </Card.Body>
        </Card>
    );
}