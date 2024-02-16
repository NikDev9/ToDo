import { Button } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
import { Url } from '../constants/global';

export default function SingleUser ({item, refresh}) {

    //Delete user from database
    function deleteUser () {

        let data = JSON.stringify({"id": item.user_id});
        let options = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: data,
        };

        //Call API to delete the user
        fetch(`${Url}/api/users/`+item.user_id, {method: "DELETE"})
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log('Data', data);
            refresh();
        });
    }

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.admin ? 'Yes' : 'No'}</td>
            <td><Button variant="secondary" id="buttons" onClick={deleteUser}><BsFillTrashFill/></Button></td>                         
        </tr>
    );
}