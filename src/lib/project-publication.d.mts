import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;
type Data = Project['data'];
type Group = 'selected' | 'research' | 'tools' | 'creative';
export interface RepositoryMetadata {
  full_name?: string;
  private?: boolean;
  language?: string | null;
  pushed_at?: string;
  archived?: boolean;
}
export interface ProjectRow {
  key: string;
  group: Group;
  title: string;
  status: string;
  description: string;
  tags: string[];
  language: string;
  pushed: string;
  writeupUrl: string;
  githubUrl: string | null;
  demoUrl: string | null;
  demoLinkLabel: string;
  image: string | null;
  imageAlt: string;
}
export const projectGroups: { key: Group; title: string }[];
export function publishedProjects(projects: Project[]): Project[];
export function repositoryFor(data: Data): string | null;
export function publicSourceUrl(data: Data): string | null;
export function publicProjectLinks(data: Data): { label: string; url: string }[];
export function projectRows(projects: Project[], repositories?: RepositoryMetadata[]): ProjectRow[];
