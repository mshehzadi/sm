import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './component/Register.js';
import Login from './component/Login.js';
import Home from './component/Home.js';
import About from './component/About.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;







   

