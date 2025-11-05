import type { JSX } from "react";
import styled from "styled-components";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "./colors";

export type TimelineItem = {
  name: string;
  date: string;
  headline?: string;
  description: string;
};

type Props = {
  title: string;
  titleHeadingLevel: number;
  items: TimelineItem[];
};

const StyledTimeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    background-color: ${COLOR_SECONDARY};
    top: 8px;
    bottom: 0;
    left: 1px;
  }
`;

const StyledItem = styled.div`
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: ${COLOR_PRIMARY};
    border-radius: 50%;
    top: 10px;
    left: -8px;
    margin-top: -4px;
    border: 4px solid white;
  }
`;

const StyledHeadline = styled.strong`
  color: ${COLOR_PRIMARY};
`;

const StyledDescription = styled.p``;

export const Timeline = ({ title, titleHeadingLevel, items }: Props) => {
  const TitleHeading = `h${titleHeadingLevel}` as keyof JSX.IntrinsicElements;
  const ItemHeading = `h${
    titleHeadingLevel + 1
  }` as keyof JSX.IntrinsicElements;

  return (
    <div>
      <TitleHeading>{title}</TitleHeading>
      <StyledTimeline>
        {items.map(({ name, date, headline, description }) => (
          <StyledItem key={name}>
            <ItemHeading>
              {name} <i>({date})</i>
            </ItemHeading>
            {headline && <StyledHeadline>{headline}</StyledHeadline>}
            <StyledDescription>{description}</StyledDescription>
          </StyledItem>
        ))}
      </StyledTimeline>
    </div>
  );
};
