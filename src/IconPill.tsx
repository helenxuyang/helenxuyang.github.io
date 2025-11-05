import styled from "styled-components";
import { COLOR_SECONDARY } from "./colors";

const StyledPill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  padding: 8px;
  border: 2px solid ${COLOR_SECONDARY};
`;

const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  transition: transform 1s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;

type Props = {
  iconSrc?: string;
  name: string;
};

export const IconPill = ({ iconSrc, name }: Props) => {
  return (
    <div>
      <StyledPill>
        {iconSrc && <StyledIcon src={iconSrc} alt="" aria-hidden="true" />}
        {name}
      </StyledPill>
    </div>
  );
};
