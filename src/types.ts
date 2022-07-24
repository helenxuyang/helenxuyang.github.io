export type Project = {
  name: string,
  date: string,
  description: string,
  image: string,
  altText: string,
  repoURL?: string,
  otherLinks?: Map<string, string>
}