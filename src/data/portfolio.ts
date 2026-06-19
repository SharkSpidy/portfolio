// ─── TYPES ───────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  date: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  icon: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  label: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'resume';
}

// ─── PORTFOLIO DATA ──────────────────────────────────────────────────
// Replace every [placeholder] with your real information.

export const owner = {
  firstName: 'Joseph',
  lastName: 'Shibu',
  email: 'josephshibuwork@gmail.com',
  status: 'Freelance Software Engineer',
  tagline: 'I build computer vision projects that solve real problems. Passionate about computer vision, frontend development, with a focus on shipping products that actually work at scale.',
  repoCount: 55,
  projectsShipped: '6',
  yearsExperience: '3',
  githubUrl: 'https://github.com/sharkspidy',
};

export const skills: Skill[] = [
  { label: 'Open CV',   featured: true },
  { label: 'React',    featured: true },
  { label: 'Machine Learning',  featured: true },
  { label: 'TypeScript' },
  { label: 'MERN Stack' },
  { label: 'Docker' },
  { label: 'AWS' },
  { label: 'Vercel' },
  { label: 'Git' },
  { label: 'Linux' },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    date: 'June 2026 —  Present',
    company: 'HIVE Official',
    role: '[Your Job Title — e.g. Software Engineer]',
    description:
      '[Describe your most impactful contribution in 2–3 sentences. Focus on the problem you solved and the outcome — e.g. "Redesigned the data ingestion pipeline, cutting processing time by 40% and enabling the team to handle 3× the previous event volume."]',
    tags: ['[Tech Used]', '[Tech Used]', '[Tech Used]'],
  },
  {
    id: 'exp-2',
    date: 'May 2026 —  Present',
    company: 'Sigmma Engineering Limited, New Zealand',
    role: 'Junior Software Engineer',
    description:
      'Working on various projects involving computer vision and web development. Contributed to the development of scalable applications and improved existing systems for better performance and user experience.',
    tags: ['Computer Vision', 'Web Development', 'Software Engineering'],
  },
  {
    id: 'exp-3',
    date: '2023 — 2027',
    company: 'Albertian Institute of Science and Technology',
    role: 'B.Tech in Computer Science',
    description:
      'Led various activities and projects in the field of computer science, gaining hands-on experience in software development, algorithms, and data structures. Developed a strong foundation in programming languages and problem-solving skills.',
    tags: ['Tinkerhub Foundation', 'BuilderClan', 'HIVE'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    icon: '🛠',
    name: '[Project Name]',
    description: '[Briefly describe the core problem this project solved in 2 sentences. What did it do, and who was it for?]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    githubUrl: '[GitHub Repo URL]',
    liveUrl: '[Live Demo URL]',
  },
  {
    id: 'proj-2',
    icon: '🤖',
    name: '[Project Name]',
    description: '[Briefly describe the core problem this project solved in 2 sentences. What did it do, and who was it for?]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    githubUrl: '[GitHub Repo URL]',
    liveUrl: '[Live Demo URL]',
  },
  {
    id: 'proj-3',
    icon: '📊',
    name: '[Project Name]',
    description: '[Briefly describe the core problem this project solved in 2 sentences. What did it do, and who was it for?]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    githubUrl: '[GitHub Repo URL]',
  },
  {
    id: 'proj-4',
    icon: '🌐',
    name: '[Project Name]',
    description: '[Briefly describe the core problem this project solved in 2 sentences. What did it do, and who was it for?]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    githubUrl: '[GitHub Repo URL]',
    liveUrl: '[Live Demo URL]',
  },
  {
    id: 'proj-5',
    icon: '⚡',
    name: '[Project Name]',
    description: '[Briefly describe the core problem this project solved in 2 sentences. What did it do, and who was it for?]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    githubUrl: '[GitHub Repo URL]',
  },
  {
    id: 'proj-6',
    icon: '🔒',
    name: '[Project Name]',
    description: '[Briefly describe the core problem this project solved in 2 sentences. What did it do, and who was it for?]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    githubUrl: '[GitHub Repo URL]',
    liveUrl: '[Live Demo URL]',
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub',      url: 'https://github.com/sharkspidy', icon: 'github'  },
  { label: 'LinkedIn',    url: '[LinkedIn URL]',                icon: 'linkedin' },
  { label: 'Twitter / X', url: '[Twitter/X URL]',              icon: 'twitter'  },
  { label: 'Resume / CV', url: '[Resume PDF URL]',             icon: 'resume'   },
];
