import React, { useState } from 'react'
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';


function AddUser() {
    const history = useNavigate();
    const [inputs,setInputs] = useState({
      name:"",
      gmail:"",
      age:"",
      address:"",
    })
  return (
    <div>
        <Nav/>
      <h1>Add user page</h1>
        <form>
            <label>name:</label>
            <br/>
            <input type="text" name="name" required/>
            <br></br>
            <label for="lname">Last name:</label>
            <br/>
            <input type="text" id="lname" name="lname"/>
       </form>
    </div>
  )
}

export default AddUser
