import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Component/Register.js';
import Login from './Component/Login.js';
import Home from './Component/Home.js';
import GetStarted from './component/GetStarted.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/about" element={<About />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
