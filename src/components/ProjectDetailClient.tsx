'use client'

import { useState, useEffect } from 'react'
import { ProjectCard } from '@/components/ProjectCard'

import MinimalNavigation from '@/components/MinimalNavigation'
import Link from 'next/link'
import { PageLoader } from '@/components/PageLoader'
import { PageTransition, FadeInUp, SlideInFromLeft } from '@/components/ui/PageTransitions'
import { Project } from '@/types/project'

interface ProjectDetailClientProps {
  project: Project
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <PageLoader isLoading={isLoading} text="Loading Project">
      <PageTransition>
        <div className="min-h-screen w-full bg-white dark:bg-black">
          <MinimalNavigation />
    

          {/* Project Detail Section - Full Width with Borders */}
          <section className="w-full border-b border-neutral-200 dark:border-neutral-700 relative bg-neutral-50/30 dark:bg-neutral-900/30 pt-16 sm:pt-16">
            <div className="w-full relative">
              
              <div className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 relative z-20">
                <div className="max-w-5xl mx-auto">
                  <SlideInFromLeft delay={0.2}>
                    <Link 
                      href="/projects" 
                      className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 inline-flex items-center hover:underline transition-colors"
                    >
                      <span className="mr-2">←</span>
                      <span>Back to projects</span>
                    </Link>
                  </SlideInFromLeft>
                  <FadeInUp delay={0.4}>
                    <ProjectCard project={project} isDetailed />
                  </FadeInUp>
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </PageLoader>
  )
}
