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
    <div className="min-h-screen transition-colors duration-300 font-['Poppins'] relative">
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />
        
        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl">
          {/* Banner Section */}
          <BannerSection 
            bannerImage="/smartc.jpg"
            quote="Build • Secure • Deploy • Innovate"
          />
          {/* Profile Header */}
          <ProfileHeader 
            name="Akshat Srivastava"
            age="20"
            title="full-stack developer • open source contributor • web3 security"
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
                subtitle="Full-Stack Developer | Open Source Contributor | Web3 Security"
                title='Building <a class="text-[#006FEE] hover:underline" href="/projects">decentralized applications</a> and exploring Web3 security <span class="opacity-70 font-light">— Passionate about blockchain technology and solving challenging problems through code.</span>'
                className="mt-6"
              >
                <div></div>
              </ContentSection>
              
              <SectionBorder className="mt-2" />
              
              {/* About Section */}
              <ContentSection background className="pb-4 pt-1">
                <ContentParagraph className="mt-4">
                  <span className="font-medium dark:text-white text-black">3rd Year CS Undergraduate</span> passionate about Web3, Blockchain Security, and Full-Stack Development. Currently working on DApps, Smart Contract Auditing, and Web3 Security research.
                </ContentParagraph>
                <ContentParagraph>
                  <span className="font-medium dark:text-white text-black">Experienced in Web2 & Web3 development</span> with React/Next.js, Express, Supabase, Solidity, and Foundry. Actively learning Smart Contract Security and solving DSA problems on LeetCode.
                </ContentParagraph>
              </ContentSection>

              <SectionBorder className="mt-0 pt-0" />

               {/* Experience Section */}
              <div className="sm:px-12 px-6">
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
                    <span className="font-medium dark:text-white text-black">Languages:</span> Java, JavaScript, TypeScript, Solidity, SQL
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Web Development:</span> React.js, Next.js, Node.js, Express.js, ShadCN UI
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Blockchain / Web3:</span> Solidity, Foundry, ZkSync
                  </ContentParagraph>
                  <ContentParagraph>
                    <span className="font-medium dark:text-white text-black">Tools & Platforms:</span> Git, GitHub, Postman, Framer, Gsap
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
                    <span className="font-medium dark:text-white text-black">DSA & Problem Solving:</span> Actively solving problems on LeetCode to sharpen my algorithmic thinking and system design skills. Currently working on improving my problem-solving efficiency and understanding of data structures.
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
