import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import User from "../User/User"; 

const URL = "http://localhost:5000/users";

const fetchHandler = async() =>{
  return await axios.get(URL).then((res) => res.data);
}

function UserDetails() {

  const [users, setUsers] = useState();
  useEffect(()=> {
    fetchHandler().then((data) => setUsers(data.users));
  },[])

  const hadleSendReport = () =>{
    const phoneNumber = "+94772849767";
    const message = `selected user Reports`
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`; 
  
    window.open(WhatsAppUrl,"_blank");
  }

  return (
    <div>
        <Nav/>
      <h1>User Details display page</h1>
      <div>
        {users && users.map((user,i) =>(
          <div key={i}>
               <User user={user}/>
            </div>
        )
        )}
      </div>
      <button onClick={hadleSendReport}>Send Whatsapp message</button>
    </div>
     
  );
}

export default UserDetails
