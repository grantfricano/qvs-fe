import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Navbar() {
    return (
    
    <nav className="nav">  
      <Container>
        <Row>
          <Col ><Link to="/"><div className="navbar-name">Grant</div><div className="navbar-lastname">Fricano</div></Link></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          
          <Col><div className="navbar-links"> <Link to="/submitdata">Contact</Link></div></Col>
          <Col><div className="navbar-links"> <Link to="/search">Search</Link></div></Col>
          <Col><div className="navbar-links"> <Link to="/mywork">My Work </Link></div></Col>
        </Row>
      </Container>

    </nav>
    )
  }
