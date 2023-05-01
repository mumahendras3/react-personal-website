import Card from 'react-bootstrap/Card';

export default function ProjectCard({ project }) {
  const { url, image, title, description } = project;

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}