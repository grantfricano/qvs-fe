import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">  
      <Link to="/"><span className="navbar-name">Grant </span><span className="navbar-lastname">&nbsp;Fricano</span></Link>
      <ul className="navbar-links"> 
        <li><Link to="/submitdata">Submit Form</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
    )
  }
