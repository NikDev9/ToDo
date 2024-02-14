import { Card, ListGroup, ButtonGroup, Button, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { BsFillTrashFill, BsPencilFill, BsPlusCircleFill } from 'react-icons/bs';

export default function TaskList () {

    const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4']);
    const [addTask, setAddTask] = useState(false);

    function handleAddTask () {
        setAddTask((add) => !addTask);
    }

    return (
        <Card>
            <Card.Header id="cardHeader">Your list</Card.Header>
            <Card.Body>
                <ListGroup id="itemList">
                    {tasks.map((item, index) => (
                        <ListGroup.Item variant="dark" key={index}>
                            <span>{item}</span>
                            <ButtonGroup id="buttons">
                                <Button variant="secondary"><BsPencilFill/></Button>
                                <Button variant="secondary"><BsFillTrashFill/></Button>
                            </ButtonGroup>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                {!addTask &&
                    <Button onClick={handleAddTask} variant="secondary"><BsPlusCircleFill/> Add task</Button>
                }
                {addTask &&
                    <InputGroup>
                        <Form.Control placeholder="Enter task"/>
                        <Button variant="outline-secondary">Add</Button>
                    </InputGroup>
                }
            </Card.Body>
        </Card>
    );
}