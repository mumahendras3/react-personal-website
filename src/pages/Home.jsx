import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

export default function Home() {
  return (
    <Container className="px-4 py-5">
      <Row>
        <Col xl className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white headline text-center">Hello there!</h1>
          <h5 className="text-white headline text-center mb-0">I'm mumahendras3, an Open Source and Linux enthusiast.</h5>
        </Col>
        <Col xl="auto">
          <div className="bg-white divider d-xl-none"></div>
          <div className="bg-white divider-xl d-none d-xl-block"></div>
        </Col>
        <Col xl className="d-flex justify-content-center align-items-center">
          <p className="text-white short-profile mb-0">
            I have a bachelor’s degree in Engineering Physics from Faculty of Industrial Technology, Institut Teknologi Bandung (ITB). I am interested in Unix-like systems administration, shell scripting, and programming.
          </p>
        </Col>
      </Row>
    </Container>
  );
}