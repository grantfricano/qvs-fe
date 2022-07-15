import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import UserData from "./Pages/UserData";

function AppRouter() {
    
    return (
         <Router> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />    
                <Route path="/submitdata" element={<UserData />} /> 
            </Routes>
         </Router>
    )
    
}

export default AppRouter