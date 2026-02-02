
export type Theme = 'dark' | 'light';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  sourceLink: string;
}

export interface Skill {
  name: string;
  icon: any;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  size: 'small' | 'medium' | 'large';
}
