import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function User(props) {
  const {_id,name,gmail,age,address} = props.user;

  const history = useNavigate();

  const deleteHandler = async()=>{
     await axios.delete(`http://localhost:5000/users/${_id}`)
     .then(res=>res.data)
     .then(() =>history("/"))
     .then(() =>history("/userdetails"));
  }
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{gmail}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>
        <Link to={`/UserDetails/${_id}`} style={{ marginRight: "10px" }}>
          <button>Update</button>
        </Link>
        <button onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  )
}

export default User
