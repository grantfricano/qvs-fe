import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import UserData from "./Pages/UserData";

function AppRouter() {
    
    return (
         <Router> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />    
                <Route path="/login" element={<UserData />} /> 
            </Routes>
         </Router>
    )
    
}

export default AppRouter