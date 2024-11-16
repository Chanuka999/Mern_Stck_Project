import React, { useEffect, useState,useRef } from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import User from "../User/User"; 
import {useReactToPrint}  from "react-to-print";

const URL = "http://localhost:5000/users";

const fetchHandler = async() =>{
  return await axios.get(URL).then((res) => res.data);
}

function UserDetails() {

  const [users, setUsers] = useState();
  useEffect(()=> {
    fetchHandler().then((data) => setUsers(data.users));
  },[])

 const ComponentsRef = useRef();
 const handlePrint = useReactToPrint({
   content: () => ComponentsRef.current,
   DocumentTitle:"Users Report",
   onafterprint:() => alert("Users Report Successfully Download !"),
 })


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
      <div ref={ComponentsRef} >
        {users && users.map((user,i) =>(
          <div key={i}>
               <User user={user}/>
            </div>
        )
        )}
      </div>
      <button onClick={handlePrint}>Download Report</button>
      <button onClick={hadleSendReport}>Send Whatsapp message</button>
    </div>
     
  );
}

export default UserDetails
