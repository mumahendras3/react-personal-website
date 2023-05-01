import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../components/ProjectCard';
import { useSelector } from 'react-redux';

export default function Portfolio() {
  const projects = useSelector(state => state.projects);

  return (
    <Container className="px-4 py-5">
      <Row>
        <Col>
          <h1 className="text-center headline text-white mb-5">My Projects</h1>
        </Col>
      </Row>
      <Row className="project-card-gap">
        {projects.map((project, index) =>
          <Col md="6" xxl="4" key={index} className="d-flex align-items-stretch">
            <ProjectCard project={project} />
          </Col>
        )}
      </Row>
    </Container>
  );
}