import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'researchmind',
    title: 'ResearchMind',
    description:
      'An autonomous multi-agent research system that gathers live web intelligence, extracts technical context, writes citation-backed reports, and critiques its own output.',
    longDescription:
      'Orchestrates specialized Search, Reader, Writer, and Critic agents with structured scoring rubrics for higher-signal research and automated peer review.',
    image: '/turboml.jpg',
    githubLink: 'https://github.com/rpmakki03/Multi-agent-research-system',
    tags: ['Python', 'Gemini', 'LangChain', 'Tavily', 'Streamlit'],
  },
  {
    id: 'student-saarthi',
    title: 'Student-Saarthi',
    description:
      'An AI guidance platform using Gemini Flash and RAG to generate personalized career roadmaps, with voice interaction and preference-aware recommendations.',
    longDescription:
      'Built with Python, LangChain, Next.js, Supabase authentication, PostgreSQL persistence, and AWS deployment for a responsive student guidance experience.',
    image: '/images/swolenormous.jpg', // Using placeholder image
    liveLink: 'https://student-saarthi-sigma.vercel.app/',
    githubLink: 'https://github.com/rpmakki03/Student-Saarthi',
    tags: ['Python', 'LangChain', 'Next.js', 'Gemini', 'AWS', 'PostgreSQL'],
  },
  {
    id: 'world-cup-predictor',
    title: 'FIFA World Cup Predictor',
    description:
      'A machine-learning pipeline that predicts match outcomes from historical fixtures and simulates the tournament from group stages through the final.',
    longDescription:
      'Combines feature engineering, multi-class models, and custom group-stage and knockout tiebreak logic to forecast complete tournament outcomes.',
    image: '/images/swolenormous.jpg', // Using placeholder image
    githubLink: 'https://github.com/rpmakki03/worldcup-2022-project',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter'],
  },
  {
    id: 'crix',
    title: 'Crix',
    description:
      'Crix is a frontend cricket card trading game where you can open packs, browse a live market, and assemble your dream XI. Built with Next.js and TypeScript, designed in Figma, and powered by Supabase for data.',
    longDescription:
      'Core features include pack opening animations, a featured players grid, and a responsive, accessible UI.\n\nThe app is a purely frontend build backed by Supabase for persistence and authentication, with component-driven UI designed in Figma.\n\nTech: Next.js, TypeScript, Supabase, Tailwind CSS.',
    image: '/images/crix.jpg',
    liveLink: 'https://rpmakki-crix.vercel.app/',
    githubLink: 'https://github.com/rpmakki03/crix-v2',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Figma', 'Frontend'],
  },
  {
    id: 'nike-shoes-app',
    title: 'Nike Shoes App',
    description:
      'A sleek promotional site with bold hero, feature highlights and call-to-actions, optimized for speed and accessibility.',
    image: '/images/nike.jpg',
    liveLink: 'https://rpmakki-nike-app.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Frontend'],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
