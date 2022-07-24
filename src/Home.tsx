import { Grid } from '@material-ui/core';
import './Home.css';
import './ProjectCard';
import ProjectCard from './ProjectCard';
import { Project } from './types';
import { currentProjects, collegeProjects, hackathonProjects, personalProjects, hsProjects } from './projects';

type ProjectCardGridProps = {
  title: string,
  projects: Project[]
}
const ProjectCardGrid = (props: ProjectCardGridProps) => {
  return <div>
    <h3>{props.title}</h3>
    <Grid container>
      {props.projects.map((project) =>
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard {...project} />
        </Grid>
      )}
    </Grid>
  </div>;
}

const Home = () => {
  return <div id="home">
    <div id="home-intro" className="home-section">
      <p className="intro-title">Hi, I'm Helen!</p>
      <p>I'm a CS student at Cornell University ('23). I'm interested in creating useful, fun, and accessible tech!</p>
    </div>
    <div id="projects" className="home-section">
      <h2 id="projects-header">Projects</h2>
      <ProjectCardGrid title="Current Projects" projects={currentProjects} />
      <ProjectCardGrid title="School Projects" projects={collegeProjects} />
      <ProjectCardGrid title="Hackathon Projects" projects={hackathonProjects} />
      <ProjectCardGrid title="Personal Projects" projects={personalProjects} />
      <ProjectCardGrid title="High School Projects" projects={hsProjects} />
    </div>
  </div>
}

export default Home;