
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AddUser from './Components/AddUser/AddUser';
import UserDetails from './Components/UserDetails/UserDetails';
import UpdateUser from './Components/UpdateUser/UpdateUser';


function App() {
  return (
    <div className="App">
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mainhome" element={<Home/>}/>
        <Route path="/AddUser" element={<AddUser/>}/>
        <Route path="/UserDetails" element={<UserDetails/>}/>
        <Route path="/UserDetails/:id" element={<UpdateUser/>}/>
      </Routes>
    </React.Fragment>

    </div>
  );
}

export default App;
