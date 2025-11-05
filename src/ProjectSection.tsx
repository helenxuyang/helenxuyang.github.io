import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "./projectTypes";
import { MEDIUM_BREAKPOINT, SMALL_BREAKPOINT } from "./mediaQueries";

type Props = {
  name: string;
  projects: Project[];
};

const StyledProjectsHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  ${MEDIUM_BREAKPOINT} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${SMALL_BREAKPOINT} {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectSection = ({ name, projects }: Props) => {
  return (
    <div>
      <h3>{name}</h3>
      <StyledProjectsHolder>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </StyledProjectsHolder>
    </div>
  );
};
