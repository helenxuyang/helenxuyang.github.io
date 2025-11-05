import { recentPersonalProjects } from "./projectData";
import { ProjectSection } from "./ProjectSection";

export const Projects = () => {
  return (
    <div>
      <ProjectSection
        name="Recent Personal Projects"
        projects={recentPersonalProjects}
      />
    </div>
  );
};
