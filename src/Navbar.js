import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
      <ul id='nav-list'>
        <li><a href="/">Home</a></li>
        <li><a href="/submitdata">Submit Form</a></li>
        <li><a href="/search">Search</a></li>
      </ul>
      </nav>
    )
  }
