import { Card, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import SingleUser from './SingleUser';

export default function AllUsers () {

    const [users, setUsers] = useState([{'id': 1, 'email': 'a@f.com', 'name': 'aste'},{'id': 2, 'email': 'asa@f.com', 'name': 'asdste'}]);
    const [addUser, setAddUser] = useState(false);

    function handleAddUser () {
        setAddUser((add) => !addUser);
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

                <Button onClick={handleAddUser} variant="secondary"><BsPlusCircleFill/> Add user</Button>
            </Card.Body>
        </Card>
    );
}