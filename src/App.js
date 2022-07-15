import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Search";
import Login from "./Pages/UserData";
import Axios from "axios";
import AppRouter from "./AppRouter";


function App() {
    
    
  return (
      
     <div className="App">
       <ul id='nav-list'>
         <li><a href="/">Home</a></li>
         <li><a href="/submitdata">Submit Form</a></li>
         <li><a href="/search">Search</a></li>
       </ul>
      
      <AppRouter />
      
      </div>
  );
}
    


export default App;
