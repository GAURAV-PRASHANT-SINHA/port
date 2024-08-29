import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import axios from "axios";
import { useDispatch } from 'react-redux';
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";
// import { Setportofoliodata } from './redux/rootSlice';

const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
