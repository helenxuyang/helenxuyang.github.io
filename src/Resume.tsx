import resume from "./assets/files/resume.pdf";

export const Resume = () => {
  return (
    <embed
      src={resume}
      type="application/pdf"
      width="100%"
      height="1200px"
      title="Helen Xu Yang Resume"
    />
  );
};
