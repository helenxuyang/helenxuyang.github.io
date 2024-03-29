import {
  collegeProjects,
  hackathonProjects,
  personalProjects,
  hsProjects,
} from "./projectLists";
import ProjectCardGrid from "./ProjectCardGrid";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="home-section">
      <ProjectCardGrid title="College Projects" projects={collegeProjects} />
      <ProjectCardGrid
        title="Hackathon Projects"
        projects={hackathonProjects}
      />
      <ProjectCardGrid title="Personal Projects" projects={personalProjects} />
      <ProjectCardGrid title="High School Projects" projects={hsProjects} />
    </div>
  );
};

export default Projects;
