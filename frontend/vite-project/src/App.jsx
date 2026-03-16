import React from 'react'
import {Routes, Route} from 'react-router'
import Navbar from './Component/Navebar.jsx'
import Footer from './Component/Footer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Calender from './pages/Calender.jsx'
import Add from './pages/Add.jsx'
import Home from './pages/Home.jsx'
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