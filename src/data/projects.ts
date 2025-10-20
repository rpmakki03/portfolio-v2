import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'student-saarthi',
    title: 'Student-Saarthi',
    description:
      'Developed an AI-powered web platform that assists students in career counseling and personalized college selection using Google\'s Gemini API for intelligent recommendations.',
    longDescription:
      'Built a Next.js frontend integrated with Supabase for authentication, real-time data handling, and scalable backend support. Designed a user-friendly and responsive interface, enhancing engagement and simplifying the decision-making process for students exploring academic and career paths.',
    image: '/images/swolenormous.jpg', // Using placeholder image
    liveLink: 'http://student-saarthi.vercel.app',
    githubLink: 'http://github.com/rpmakki03/student-saarthi',
    tags: ['Next.js', 'Supabase', 'Gemini API', 'AI'],
  },
  {
    id: 'dapp-cord',
    title: 'Dapp-Cord',
    description:
      'Built a Web3-based decentralized communication platform inspired by Discord, enabling users to join and interact in on-chain chat rooms using their crypto wallets.',
    longDescription:
      'Developed and deployed smart contracts in Solidity with Hardhat for managing server creation, membership, and message storage on the Ethereum test network. Integrated React.js frontend with Web3.js for wallet connectivity, seamless blockchain interaction, and a modern, responsive user experience.',
    image: '/images/swolenormous.jpg', // Using placeholder image
    liveLink: 'http://dapp-cord.vercel.app',
    githubLink: 'http://github.com/rpmakki03/dapp-cord',
    tags: ['React.js', 'Solidity', 'Hardhat', 'Web3.js'],
  },
  {
    id: 'pitchnthread',
    title: 'PitchNThread',
    description:
      'Developed a modern football kits e-commerce web app featuring product browsing, detailed item pages, and a functional add-to-cart system for smooth shopping experiences.',
    longDescription:
      'Implemented dynamic data management and authentication using Supabase, ensuring secure user sessions and efficient cart persistence. Designed a responsive, visually appealing UI with Next.js and React, optimizing performance and accessibility across devices.',
    image: '/images/swolenormous.jpg', // Using placeholder image
    liveLink: 'http://pitchnthread.vercel.app',
    githubLink: 'http://github.com/rpmakki03/pitchnthread',
    tags: ['Next.js', 'React', 'Node.js', 'Supabase'],
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
    id: 'rev-your-film',
    title: 'Rev Your Film',
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
