import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    
    
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/test/welcome")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    
    return (
      <Container>
       <Row>
          <Col><div className="home-component">{data}</div></Col>
          <Col><Button>test</Button> </Col>
        </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    )

}
