import styled from "styled-components";
import type { Project } from "./projectTypes";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

const StyledContent = styled.div`
  padding: 16px;
`;

const StyledDate = styled.p`
  font-style: italic;
`;

export const ProjectCard = ({
  name,
  date,
  description,
  imageSrc,
  altText,
  links,
}: Project) => {
  return (
    <StyledCard>
      <StyledImage src={imageSrc} alt={altText} />
      <StyledContent>
        <h2>{name}</h2>
        <StyledDate>{date}</StyledDate>
        <p>{description}</p>
        {links?.map((link) => (
          <a href={link.url}>{link.name}</a>
        ))}
      </StyledContent>
    </StyledCard>
  );
};
