import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Link } from "@material-ui/core"
import './ProjectCard.css';

type Project = {
  name: string,
  date: string,
  description: string,
  image: string,
  altText: string,
  repoURL: string,
  otherLinks?: Map<string, string>
}

const ProjectCard = ({ name, date, description, image, altText, repoURL, otherLinks }: Project) => {
  return <Card className="project-card">
    <CardActionArea>
      <img alt={altText} src={image} width='100%' style={{ maxHeight: '300px', objectFit: 'contain' }}></img>
    </CardActionArea>
    <CardContent>
      <h2>{name}</h2>
      <i>{date}</i>
      <p>{description}</p>
    </CardContent>
    <CardActions>
      <Button href={repoURL} style={{ color: 'darkslateblue' }}>
        GitHub
      </Button>
      {otherLinks && Array.from(otherLinks?.keys()).map((key) =>
        <Button href={otherLinks?.get(key)} style={{ color: 'darkslateblue' }} >
          {key}
        </Button>)}

    </CardActions>
  </Card>
}

export default ProjectCard;
export type { Project };