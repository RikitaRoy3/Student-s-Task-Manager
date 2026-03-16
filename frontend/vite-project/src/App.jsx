import React from 'react'
import {Routes, Route} from 'react-router'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Dashboard from 'Pages/Dashboard.jsx'
import Calender from 'Pages/Calender.jsx'
import Add from 'Pages/Add.jsx'
import Home from 'Pages/Home.jsx'
import Login from './auth/Login.jsx'
import Register from './auth/Register'


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/calender" element={<Calender />}></Route>
        <Route path="/add" element={<Add/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App