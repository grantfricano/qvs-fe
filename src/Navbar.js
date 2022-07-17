import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">  
      <Link to="/"><div className="navbar-name">Grant</div>Fricano</Link>
      <ul className="navbar-links"> 
        <li><Link to="/submitdata">Submit Form</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
    )
  }
