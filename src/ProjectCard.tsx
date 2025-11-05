import styled from "styled-components";
import type { Project } from "./projectTypes";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "./colors";
import { useRef } from "react";
import { ImageModal } from "./ImageModal";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid ${COLOR_PRIMARY};
  border-radius: 8px;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const StyledImageButton = styled.button`
  background-color: unset;
  border: none;
  &:hover {
    cursor: zoom-in;
  }
`;

const StyledImage = styled.img`
  position: relative;
  width: 100%;
  max-height: 200px;
  object-fit: contain;
`;

// const StyledEnlargeButton = styled.button`
//   align-self: flex-end;
//   background-color: unset;
//   margin: 4px;
//   padding: 4px;
//   border: 2px solid ${COLOR_SECONDARY};
//   border-radius: 50%;
//   width: 24px;
//   height: 24px;
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

const StyledContent = styled.div`
  padding: 16px;
`;

const StyledHeader = styled.h2`
  margin: 0;
`;

const StyledDate = styled.p`
  font-style: italic;
  margin: 4px 0;
`;

const StyledTechContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const StyledTech = styled.span`
  color: ${COLOR_SECONDARY};
  padding: 4px;
  border: 2px solid ${COLOR_SECONDARY};
`;

const StyledDetails = styled.details`
  padding-bottom: 16px;

  summary {
    cursor: pointer;
    padding: 4px;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  a {
    background-color: ${COLOR_PRIMARY};
    color: white;
    padding: 8px;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
      text-decoration: underline wavy;
    }
  }
`;

export const ProjectCard = ({
  name,
  date,
  technologies,
  description,
  imageSrc,
  altText,
  links,
}: Project) => {
  const imageDialogRef = useRef<HTMLDialogElement>(null);

  const renderDescription = () => {
    if (typeof description === "string") {
      return <p>{description}</p>;
    } else if (description.length === 1) {
      return <p>{description[0]}</p>;
    } else {
      if (description.length > 1) {
        return (
          <>
            <p>{description[0]}</p>
            {
              <StyledDetails>
                <summary>Details</summary>
                {description.slice(1).map((line) => (
                  <p>{line}</p>
                ))}
              </StyledDetails>
            }
          </>
        );
      }
    }
  };

  const showImageModal = () => {
    imageDialogRef.current?.showModal();
  };

  const closeImageModal = () => imageDialogRef.current?.close();

  return (
    <StyledCard role="group">
      <StyledImageContainer>
        <StyledImageButton
          aria-label={`Open detail view of ${altText}`}
          onClick={showImageModal}
        >
          <StyledImage src={imageSrc} alt={altText} />
        </StyledImageButton>
      </StyledImageContainer>
      <StyledContent>
        <StyledHeader>{name}</StyledHeader>
        <StyledDate>{date}</StyledDate>
        <StyledTechContainer>
          {technologies?.map((tech) => (
            <StyledTech key={tech}>{tech}</StyledTech>
          ))}
        </StyledTechContainer>

        {renderDescription()}
        <StyledLinks>
          {links?.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </StyledLinks>
      </StyledContent>
      <ImageModal
        ref={imageDialogRef}
        imageSrc={imageSrc}
        altText={altText}
        closeModal={closeImageModal}
      />
    </StyledCard>
  );
};
