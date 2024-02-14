import { Card, ListGroup, ButtonGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';

export default function TaskList () {

    const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4']);

    return (
        <Card>
            <Card.Header id="cardHeader">Your list</Card.Header>
            <Card.Body>
                <ListGroup as="ul">
                    {tasks.map((item, index) => (
                        <ListGroup.Item as="li" variant="dark" key={index}>
                            <span>{item}</span>
                            <ButtonGroup id="buttons">
                                <Button variant="secondary"><BsPencilFill/></Button>
                                <Button variant="secondary"><BsFillTrashFill/></Button>
                            </ButtonGroup>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}