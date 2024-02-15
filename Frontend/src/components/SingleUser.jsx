import { Button } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';

export default function SingleUser ({item}) {

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td><Button variant="secondary" id="buttons"><BsFillTrashFill/></Button></td>                         
        </tr>
    );
}