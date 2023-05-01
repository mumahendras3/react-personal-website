import Card from 'react-bootstrap/Card';

export default function ProjectCard({ project }) {
  const { url, image, title, description } = project;

  return (
    <a target="_blank" href={url} className="project-card-anchor" rel="noreferrer">
      <Card className="project-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}