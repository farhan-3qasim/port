
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
