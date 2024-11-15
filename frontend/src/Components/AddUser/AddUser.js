import React, { useState } from 'react'
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUser() {
    const history = useNavigate();
    const [inputs,setInputs] = useState({
      name:"",
      gmail:"",
      age:"",
      address:"",
    });

const handleChange =(e) =>{
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async(e) =>{
  e.preventDefault();
  console.log(inputs);
 await sendRequest();
 history('/UserDetails');
  
};

const sendRequest = async()=>{
  await axios.post("http://localhost:5000/users",{
    name:String(inputs.name),
    gmail:String(inputs.gmail),
    age:Number(inputs.age),  
    address:String(inputs.address),
  }).then(res =>res.data);
}


  return (
    <div>
        <Nav/>
      <h1>Add user page</h1>
        <form onSubmit={handleSubmit}>
            <label>name:</label>
            <br/>
            <input type="text" name="name" onChange={handleChange} value={inputs.name} required/>
            <br></br>
            <label for="gmail">gmail:</label>
            <br/>
            <input type="text"  name="gmail" onChange={handleChange} value={inputs.gmail} required/>
            <br></br>
            <label for="age">age:</label>
            <br/>
            <input type="text"  name="age" onChange={handleChange} value={inputs.age} required/>
            <br></br>
            <label for="address">Address:</label>
            <br/>
            <input type="text"  name="address" onChange={handleChange} value={inputs.address} required/>
            <br/><br/>
          <button>Submit</button>
       </form>
    </div>
  )
}

export default AddUser
