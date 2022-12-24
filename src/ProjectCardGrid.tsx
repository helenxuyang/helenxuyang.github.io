import ProjectCard from "./ProjectCard";
import { Project } from "./types";
import "./ProjectCard";
import Grid from "@material-ui/core/Grid";
import "./ProjectCardGrid.css";

type ProjectCardGridProps = {
  title: string;
  projects: Project[];
};
const ProjectCardGrid = (props: ProjectCardGridProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <Grid container>
        {props.projects.map((project) => (
          <Grid item xs={12} sm={6} md={4}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectCardGrid;
