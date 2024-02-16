import { Card, ListGroup, Button, Form, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import ListItem from './ListItem';
import { Url } from '../constants/global';

export default function TaskList () {

    const [userId, setUserId] = useState();
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [addTask, setAddTask] = useState(false);
    const [saved, setSaved] = useState(false);

    //get user_id from local storage
    useEffect(() => {
        let user_id = localStorage.getItem('user_id');
        console.log('User id', user_id);
        if (user_id) {
         setUserId(user_id);
        }
    }, []);

    //Fetch all tasks for the logged in user
    useEffect(() => {
        fetch(`${Url}/api/tasks/`+userId)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log('Data', data);
            setTasks(data);
          });
    },  [newTask, saved]);

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