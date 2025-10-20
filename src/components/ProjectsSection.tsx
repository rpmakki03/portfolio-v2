'use client';

import { Project } from '@/types/project';
import { projects } from '@/data/projects';
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { useHapticFeedback } from '@/hooks/useHapticFeedback';

interface ProjectsSectionProps {
  maxProjects?: number;
}

export const ProjectsSection = ({ maxProjects = 6 }: ProjectsSectionProps) => {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  
  const displayProjects = projects.slice(0, maxProjects);

  const handleLinkClick = () => {
    if (isMobile()) {
      triggerHaptic('light');
    }
  };

  return (
    <div className="sm:px-12 px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold dark:text-white text-black mb-2">
          Projects
          <div className="w-16 h-0.5 bg-blue-400 dark:bg-blue-400 mt-2"></div>
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
          A selection of blockchain and full-stack projects showcasing my technical expertise and problem-solving abilities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card dark:bg-card border border-border dark:border-border rounded-lg p-6 hover:bg-accent dark:hover:bg-accent transition-colors duration-200 group"
          >
            {/* Icons */}
            <div className="flex justify-end gap-2 mb-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <FiBookmark className="w-4 h-4" />
              </button>
              <Link
                href={project.liveLink || project.githubLink || '#'}
                target="_blank"
                onClick={handleLinkClick}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FiArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Project Title */}
            <h3 className="text-foreground font-bold text-xl mb-3 leading-tight">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                  +{project.tags.length - 3} more
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-4">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </Link>
              )}
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  <FiArrowUpRight className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
