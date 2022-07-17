import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import UserData from "./Pages/UserData";
import Navbar from "./Navbar";


function App() {
    
  return (
     <div className="App">
       <>
       <Navbar />
       <div className="container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />    
              <Route path="/submitdata" element={<UserData />} /> 
          </Routes>
        </div>
      </>
      </div>
  );
}
export default App;
