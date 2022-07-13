import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Conatiner/login/Login';
import './App.css';
import Singin from './Conatiner/Singin/Singin';
import Home from './Conatiner/Home/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/Login' element={<Login />} exact />
        <Route path='/Singin' element={<Singin />} exact />
      </Routes>
    </Router>
  );
}

export default App;
