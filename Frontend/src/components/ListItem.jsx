import { ListGroup, ButtonGroup, Button, Form, InputGroup } from 'react-bootstrap';
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { useState } from "react";
import { Url } from '../constants/global';

export default function ListItem ({item, refresh}) {

    const [editTask, setEditTask] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');

    //Show/hide div to edit task
    function handleEditTask () {
        setEditTask((edit) => !editTask);
    }

    //Delete task from database
    function handleDeleteTask () {
        //Call API to delete the task
        fetch(`${Url}/api/tasks/`+item.task_id, {method: "DELETE"})
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log('Data', data);
            refresh();
        });
    }

    //Update task in database
    function saveNewTask () {
        let data = JSON.stringify({"task_name": newTaskName});
        let options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: data,
        };

        //Call PUT API to update task
        fetch(`${Url}/api/tasks/`+item.task_id, options)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log('Data', data);
            handleEditTask();
            refresh();
        });
    }

    return (
        <ListGroup.Item variant="dark">
            {!editTask && 
                <span>{item.task_name}</span>
            }
            {!editTask && 
                <ButtonGroup id="buttons">
                    <Button variant="secondary" onClick={handleEditTask}><BsPencilFill/></Button>
                    <Button variant="secondary" onClick={handleDeleteTask}><BsFillTrashFill/></Button>
                </ButtonGroup>
            }
            {editTask &&
                <InputGroup>
                    <Form.Control 
                        value={newTaskName}
                        placeholder={item.task_name}
                        onChange={(event) => setNewTaskName(event.target.value)}/>
                        <Button variant="outline-secondary" onClick={saveNewTask}>Save</Button>
                    </InputGroup>
            }                            
        </ListGroup.Item>
    );
}