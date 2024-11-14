import React from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";

const URL = "http://localhost:5000/users";

const fetchHandler = async() =>{
  return await axios.get(URL).then((res) => res.data);
}

function UserDetails() {
  return (
    <div>
        <Nav/>
      <h1>User Details display page</h1>
    </div>
  )
}

export default UserDetails
