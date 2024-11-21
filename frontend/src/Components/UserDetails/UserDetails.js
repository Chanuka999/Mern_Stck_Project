import React, { useEffect, useState, useRef } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function UserDetails() {
  // Initialize users as an empty array
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users || []));
  }, []);

  // Reference for printing
  const componentsRef = useRef();

  // Handle print functionality
  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
    documentTitle: "Users Report",
    onAfterPrint: () => alert("Users Report Successfully Downloaded!"),
  });

  // const [searchQuery, setSearchQuery] = useState("");
  // const [noResult, setNoResults] = useState(false);

  // const handleSerch = () =>{
  //   fetchHandler().then((data) =>{
  //     const filterdUsers = data.users.filter((user) => Object.values(user).some((field) =>
  //      field.toString().toLowerCase().includes(searchQuery.toLowerCase())
  //     ))
  //     setUsers(filterdUsers);
  //     setNoResults(filterdUsers.length === 0);
  //   });
  // }

  // Handle sending report via WhatsApp
  const handleSendReport = () => {
    const phoneNumber = "+94772849767";
    const message = `Selected user reports:\n${users
      .map((user) => `ID: ${user._id}, Name: ${user.name}, Email: ${user.gmail}`)
      .join("\n")}`;
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(WhatsAppUrl, "_blank");
  };

  return (
    <div>
      <Nav />
      <h1 className="hello">User Details Display Page</h1>
     
    
      <div ref={componentsRef}>
        {users.length > 0 ? (
          <table
            border="1"
            cellPadding="10"
            style={{ width: "100%", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User key={user._id} user={user} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button className="d1" onClick={handlePrint}>Download Report</button>
        <button className="d1" onClick={handleSendReport}>Send WhatsApp Message</button>
      </div>
    </div>
    
  );
}

export default UserDetails;
