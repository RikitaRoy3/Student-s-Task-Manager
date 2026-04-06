// import React from 'react'
// import {Routes, Route} from 'react-router'
// import Navbar from './Component/Navebar.jsx'
// import Footer from './Component/Footer.jsx'
// import Dashboard from './pages/Dashboard.jsx'
// import Calender from './pages/Calender.jsx'
// import Add from './pages/Add.jsx'
// import Home from './pages/Home.jsx'
// import Login from './auth/Login.jsx'
// import Signup from './auth/Signup.jsx'


// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/signup" element={<Signup />}></Route>
//         <Route path="/dashboard" element={<Dashboard />}></Route>
//         <Route path="/calender" element={<Calender />}></Route>
//         <Route path="/add" element={<Add/>}></Route>
//       </Routes>
//       <Footer/>
//     </div>
//   );
// }

// export default App




import React, {useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Navbar from "./Component/Navebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Add from "./pages/Add.jsx";
import Profile from "./auth/Profile.jsx";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import Taskslist from "./pages/Taskslist.jsx";
import Home from "./Component/Home.jsx";
import ProtectedRoute from "./Component/ProtectedRoute.jsx";

function App() {

  return (
    <div>
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
        <Route path="/tasks-list" element={<ProtectedRoute><Taskslist /></ProtectedRoute>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
        
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </div>
  );
}

export default App;
