import { ListGroup, ButtonGroup, Button, Form, InputGroup } from 'react-bootstrap';
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { useState } from "react";

export default function ListItem ({key, item}) {

    const [editTask, setEditTask] = useState(false);

    function handleEditTask () {
        setEditTask((edit) => !editTask);
    }

    return (
        <ListGroup.Item variant="dark" key={key}>
            {!editTask && 
                <span>{item}</span>
            }
            {!editTask && 
                <ButtonGroup id="buttons">
                    <Button variant="secondary" onClick={handleEditTask}><BsPencilFill/></Button>
                    <Button variant="secondary"><BsFillTrashFill/></Button>
                </ButtonGroup>
            }
            {editTask &&
                <InputGroup>
                    <Form.Control placeholder={item}/>
                        <Button variant="outline-secondary">Save</Button>
                    </InputGroup>
            }                            
        </ListGroup.Item>
    );
}