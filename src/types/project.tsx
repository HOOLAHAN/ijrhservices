export interface Project {
  title: string;
  logo: string;
  altTextLogo: string;
  description: string;
  url: string;
  client_repo: string;
  server_repo: string;
  technologies: string[];
  features: [string, string][];
}