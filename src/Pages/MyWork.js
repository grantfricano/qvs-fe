import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

export default function MyWork() {


    return (
        <Container>
         <Row>
            <Col>1 of 1 </Col>
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