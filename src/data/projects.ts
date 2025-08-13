import { Project } from '@/types/project'

export const projects: Project[] = [
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
    id: 'swolenormous',
    title: 'Swolenormous',
    description:
      'Responsive fitness brand landing page with clean visuals, sections for offerings, testimonials, and a modern dark theme UI.',
    image: '/images/swolenormous.jpg',
    liveLink: 'https://rpmakki-swolenormous.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Frontend'],
  },
  {
    id: 'far-away',
    title: 'Far Away',
    description:
      'A travel-inspired UI with curated sections and responsive layout, focusing on clarity, typography and discoverability.',
    image: '/images/far-away.jpg',
    liveLink: 'https://rpmakki-far-away.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Frontend'],
  },
  {
    id: 'rev-your-film',
    title: 'Rev Your Film',
    description:
      'A sleek promotional site with bold hero, feature highlights and call-to-actions, optimized for speed and accessibility.',
    image: '/images/nike.jpg',
    liveLink: 'https://rpmakki-revyourfilm.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Frontend'],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
