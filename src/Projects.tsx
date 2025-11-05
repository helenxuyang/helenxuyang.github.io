import {
  collegeProjects,
  hackathonProjects,
  hsProjects,
  personalProjects,
  recentPersonalProjects,
} from "./projectData";
import { ProjectSection } from "./ProjectSection";

export const Projects = () => {
  return (
    <div>
      <ProjectSection
        name="Recent Personal Projects"
        projects={recentPersonalProjects}
      />
      <ProjectSection name="College Projects" projects={collegeProjects} />
      <ProjectSection name="Hackathon Projects" projects={hackathonProjects} />
      <ProjectSection
        name="Older Personal Projects"
        projects={personalProjects}
      />
      <ProjectSection name="High School Projects" projects={hsProjects} />
    </div>
  );
};
