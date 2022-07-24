import { Button, Card, CardActions, CardContent } from "@material-ui/core"
import './ProjectCard.css';
import { Project } from './types';

const ProjectCard = ({ name, date, description, image, altText, repoURL, otherLinks }: Project) => {
  return <Card className="project-card">
      <img alt={altText} src={image} width='100%' style={{ maxHeight: '300px', objectFit: 'contain' }}></img>
    <CardContent>
      <h4>{name}</h4>
      <i>{date}</i>
      <p>{description}</p>
    </CardContent>
    <CardActions>
      {repoURL && <Button href={repoURL} style={{ color: 'darkslateblue' }}>
        GitHub
      </Button>}
      {otherLinks && Array.from(otherLinks?.keys()).map((key) =>
        <Button href={otherLinks?.get(key)} style={{ color: 'darkslateblue' }} >
          {key}
        </Button>)}
    </CardActions>
  </Card>
}

export default ProjectCard;
