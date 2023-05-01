import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useSelector } from 'react-redux';

export default function About() {
  const workExperiences = useSelector(state => state.workExperiences);
  const educations = useSelector(state => state.educations);

  return (
    <Container className="px-4 py-5 text-white">
      <Row>
        <Col>
          <h1 className="text-center headline mb-4">About Me</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="4" md="3" lg="2" className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/sinewave3.png"
            fluid
            className="mb-3"
          />
          <h4 className="text-center mb-3 mb-lg-0">mumahendras3</h4>
        </Col>
        <Col lg="auto" className="d-none d-lg-block"></Col>
        <Col xs="11" lg="8" className="d-lg-flex align-items-center">
          <p className="text-white description mb-0">
            I have a bachelor’s degree in Engineering Physics from Faculty of Industrial Technology, Institut Teknologi Bandung (ITB). I am interested in Unix-like systems administration, shell scripting, and programming.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="bg-white portfolio-divider"></div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="11" lg="5">
          <h2 className='headline text-center mb-3'>Work Experience</h2>
          {workExperiences.map((experience, index) =>
            <div key={index}>
              <p className="mb-0">{experience.duration}</p>
              <p className="mb-0 fw-bolder">{experience.title}</p>
              <p className={`mb-${index === workExperiences.length - 1 ? 0 : 3} description`}>{experience.description}</p>
            </div>
          )}
        </Col>
        <Col xs="12" lg="1" className="d-flex justify-content-lg-center">
          <div className="bg-white portfolio-divider w-100 d-lg-none"></div>
          <div className="bg-white portfolio-divider-lg d-none d-lg-block"></div>
        </Col>
        <Col xs="11" lg="5">
          <h2 className='headline text-center mb-3'>Education</h2>
          {educations.map((education, index) =>
            <div key={index}>
              <p className="mb-0">{education.duration}</p>
              <p className={`mb-${index === educations.length - 1 ? 0 : 3} fw-bolder`}>{education.school}</p>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="bg-white portfolio-divider"></div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <h2 className='headline text-center mb-3'>Contact Me</h2>
        <Col xs="auto" className="text-center">
          <a target='_blank' href="mailto:mumahendras3@gmail.com" className="contact-logo text-white fs-2">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </Col>
        <Col xs="auto" className="text-center">
          <a target='_blank' href="https://linkedin.com/in/mumahendras3" className="contact-logo text-white fs-2">
            <i className="bi bi-linkedin"></i>
          </a>
        </Col>
        <Col xs="auto" className="text-center">
          <a target='_blank' href="https://github.com/mumahendras3" className="contact-logo text-white fs-2">
            <i className="bi bi-github"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}