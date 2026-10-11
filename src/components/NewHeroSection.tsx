'use client'

import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import ExperienceContent from './ExperienceContent'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import ContributionsDisplay from './ContributionsDisplay'
import TechStackMarquee from './TechStackMarquee'
import { ProjectsSection } from './ProjectsSection'
import { AnimatedShinyText } from './magicui/animated-shiny-text'
import Image from 'next/image'

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 font-[family-name:var(--font-bricolage-grotesque)] relative">
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl">
          {/* Banner Section */}
          <BannerSection 
            bannerImage="/profile-banner.jpg"
            quote=""
          />
          {/* Profile Header */}
          <ProfileHeader 
            name="Akshat Srivastava"
            title="software developer • generative AI • backend systems"
            profileImage="/pfp.jpg"
            socialLinks={{
              twitter: "https://x.com/rpmakki",
              github: "https://github.com/rpmakki03",
              linkedin: "https://www.linkedin.com/in/akshat-srivastava-814505216",
            }}
          />
          
          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <ContentSection
                subtitle="Python · Generative AI · Agentic Systems · Full Stack"
                className="mt-6"
              >
                <div className="pb-6">
                  <p className="text-md sm:text-lg font-medium" style={{ letterSpacing: '-0.02em' }}>
                    I build intelligent software that turns complex workflows into useful products. <span className="opacity-70 font-light">From multi-agent research systems to production backend services, I care about clear architecture, reliable execution, and real user impact.</span>
                  </p>
                </div>
              </ContentSection>
              
              <SectionBorder className="mt-2" />
              
              {/* About Section */}
              <ContentSection background className="pb-4 pt-1">
                <ContentParagraph className="mt-4">
                  <span className="font-medium dark:text-white text-black">Computer Science undergraduate and software developer</span> specializing in Python, Generative AI, LLM application development, and retrieval-augmented generation.
                </ContentParagraph>
                <ContentParagraph>
                  <span className="font-medium dark:text-white text-black">Hands-on across the stack</span> with LangChain, agentic workflows, Node.js/Express, React/Next.js, PostgreSQL, MySQL, AWS, and automation tooling. My work has supported web applications serving 40K+ users.
                </ContentParagraph>
              </ContentSection>

              <SectionBorder className="mt-0 pt-0" />

               {/* Experience Section */}
              <div id="work" className="sm:px-12 px-6 scroll-mt-24">
                <h2 className="text-md mb-2 opacity-30 mt-6"><AnimatedShinyText>Professional Experience</AnimatedShinyText></h2>
                <ExperienceContent />
              </div>

                <SectionBorder className="mt-0 pt-0" />
                
                {/* Projects Section */}
              <div className="mt-6">
                <ProjectsSection maxProjects={6} />
              </div>
              
              <SectionBorder className="mt-0 pt-0" />
              
                 {/* Tech Stack */}
              <div className="sm:px-12 px-6">
                <h2 className="text-md mb-2 opacity-20 mt-6"><AnimatedShinyText>Tech Stack</AnimatedShinyText></h2>
                <div className="space-y-4 dark:text-white/70 text-black/70 pb-6">
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">AI & Generative AI:</span> Python, LLMs, RAG, LangChain, LangGraph, Agentic AI, NLP, MCP, Prompt Engineering
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Web & Backend:</span> Node.js, Express.js, React.js, Next.js, PostgreSQL, MySQL, REST APIs, Socket.io, Tailwind CSS
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Languages:</span> Python, JavaScript, Java, SQL, Solidity
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Automation & Cloud:</span> n8n, AWS EC2/S3, Docker, Git, GitHub, Postman, Obsidian
                  </ContentParagraph>
                </div>
              </div>


              
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* GitHub Contributions */}
              <div className="sm:px-12 px-6 mt-4">
                <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-4">
                  <AnimatedShinyText>GitHub Contributions</AnimatedShinyText> <span className="opacity-30">●</span> @rpmakki03
                </h2>
                <div className="mb-6">
                  <ContributionsDisplay
                    username="rpmakki03"
                    variant="compact"
                    className="w-full"
                  />
                </div>
              </div>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Tech Stack Section */}
              <div className="sm:px-12 px-6 mt-6 mb-6">
                <TechStackMarquee className="w-full" />
              </div>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* LeetCode Stats */}
              <div className="sm:px-12 px-6 mt-4">
                <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-2">
                  <AnimatedShinyText>LeetCode Stats</AnimatedShinyText>
                </h2>
                <div className="space-y-4 dark:text-white/70 text-black/70 pb-6">
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">DSA & Problem Solving:</span> Peak contest rating of 1505 on LeetCode, backed by consistent practice across algorithms and core computer science fundamentals.
                  </ContentParagraph>
                  <div className="flex justify-center">
                    <div className="w-full max-w-md">
                      <Image 
                        src="https://leetcard.jacoblin.cool/rpmakki?theme=dark&font=Baloo%20Tamma%202&ext=contest" 
                        alt="LeetCode Stats" 
                        width={400}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-lg"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'block';
                          }
                        }}
                      />
                      <div className="hidden text-center p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <p className="text-gray-600 dark:text-gray-400">
                          LeetCode stats temporarily unavailable
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                          Visit my LeetCode profile: 
                          <a 
                            href="https://leetcode.com/rpmakki" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                          >
                            @rpmakki
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <SectionBorder className="mt-0 pt-0" />

              {/* call to action*/}
              <CallToAction/>
              
              <SectionBorder className="mt-0 pt-0" />
              
              {/* Reachout Section */}
              <div className="mt-6">
                <Reachout 
                  title="Let's connect"
                  subtitle="Find me on these platforms"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
