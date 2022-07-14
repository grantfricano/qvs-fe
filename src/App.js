import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Axios from "axios";


function App() {
    
    
  return <Router> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />    
                <Route path="/login" element={<Login />} /> 
            </Routes>
         </Router>;
    
}

export default App;
