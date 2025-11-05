export type ProjectLink = {
  name: string;
  url: string;
};

export type Project = {
  name: string;
  date: string;
  description: string;
  imageSrc: string;
  altText: string;
  links?: ProjectLink[];
};
