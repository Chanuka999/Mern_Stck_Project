import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="topnav">
      <Link to="/mainhome" className="active home-a">
        <div class="active">Home</div>
      </Link>
      <Link to="/AddUser" className="active home-a">
        <div>Add User</div>
      </Link>
      <Link to="/UserDetails" className="active home-a">
        <div>User Details</div>
      </Link>
    </div>
  );
}

export default Nav;
