import { Card, ListGroup, Button, Form, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import ListItem from '../ListItem';
import { Url } from '../../constants/global';
import { useLocation } from 'react-router-dom';

export default function TaskList () {

    const loc = useLocation();
    const userId = loc?.state?.user_id;
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [addTask, setAddTask] = useState(false);
    const [saved, setSaved] = useState(false);

    //Fetch all tasks for the logged in user
    useEffect(() => {
        console.log('User id task', userId);
        fetch(`${Url}/api/tasks/`+userId)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log('Data', data);
            setTasks(data);
          });
    },  [newTask, saved, userId]);

    //Show/hide div for adding new task
    function handleAddTask () {
        setAddTask((add) => !addTask);
    }

    //Add new task to database
    function handleSaveTask () {
        let data = JSON.stringify({"task_name": newTask, "user_id": userId});
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: data,
        };

        //Call POST API to create task
        fetch(`${Url}/api/tasks/`, options)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log('Data', data);
            handleAddTask();
            setNewTask('');
        });
    }

    return (
        <Card>
            <Card.Header id="cardHeader">Your list</Card.Header>
            <Card.Body>
                {tasks.length == 0 &&
                    <p>Get started by adding your first task.</p>
                }
                <ListGroup id="spacing">
                    {tasks.map((item, index) => (
                        <ListItem key={index} item={item} refresh={() => setSaved((save) => !saved)}/>
                    ))}
                </ListGroup>
                {!addTask &&
                    <Button onClick={handleAddTask} variant="secondary"><BsPlusCircleFill/> Add task</Button>
                }
                {addTask &&
                    <InputGroup>
                        <Form.Control placeholder="Enter task" onChange={(event) => setNewTask(event.target.value)}/>
                        <Button variant="outline-secondary" onClick={handleSaveTask}>Add</Button>
                    </InputGroup>
                }
            </Card.Body>
        </Card>
    );
}