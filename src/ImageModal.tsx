import { createPortal } from "react-dom";
import styled from "styled-components";
import { COLOR_PRIMARY } from "./colors";
import type { RefObject } from "react";

const StyledDialog = styled.dialog`
  padding: 8px;
  &::backdrop {
    overflow: hidden;
    overscroll-behavior: contain;
  }
`;

const StyledEnlargedImage = styled.img`
  max-width: 700px;
`;

const StyledCloseButton = styled.button`
  display: block;
  color: white;
  background-color: ${COLOR_PRIMARY};
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  border: unset;
`;
type Props = {
  ref: RefObject<HTMLDialogElement | null>;
  imageSrc: string;
  altText: string;
  closeModal: () => void;
};

export const ImageModal = ({ ref, imageSrc, altText, closeModal }: Props) => {
  return createPortal(
    <StyledDialog ref={ref}>
      <StyledCloseButton autoFocus onClick={closeModal}>
        Close
      </StyledCloseButton>
      <StyledEnlargedImage src={imageSrc} alt={altText} />
    </StyledDialog>,
    document.getElementById("image-modal-container") as HTMLElement
  );
};
