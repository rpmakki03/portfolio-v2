'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  highlights: string[];
  href?: string;
  logoUrl?: string;
}

export default function ExperienceContent() {
  const experiences: ExperienceItem[] = [
    {
      company: "OneKnotOne Technologies",
      position: "Full Stack Developer Intern · Hybrid",
      duration: "Jan 2026 — Aug 2026",
      logoUrl: "/company-logos/oneknotone.jpg",
      highlights: [
        "Built Python and LangChain workflows for internal LLM-powered tools.",
        "Developed Node.js/Express microservices and PostgreSQL/MySQL migration scripts.",
        "Automated workflows with n8n and integrated virtual-assistant and fraud-detection modules.",
      ],
    },
    {
      company: "Lirion",
      position: "Blockchain Full Stack Developer · Remote",
      duration: "Nov 2025 — Dec 2025",
      logoUrl: "/company-logos/lirion.jpg",
      highlights: [
        "Built REST APIs and backend services in Node.js for dynamic data synchronization.",
        "Integrated Stripe checkout, webhooks, and automated payment verification.",
        "Designed relational schemas, optimized queries, and strengthened server-side error handling.",
      ],
    },
  ];

  return (
    <div className="space-y-6 dark:text-white/70 text-black/70 pb-6">
      {experiences.map((exp) => (
        <article key={exp.company} className="rounded-2xl border border-neutral-200/80 dark:border-white/10 p-5 sm:p-6 bg-white/70 dark:bg-white/[0.025]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          {/* Left side - Logo, Company & Position */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            {/* Company Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-neutral-200 dark:border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
              {exp.logoUrl ? (
                <Image 
                  src={exp.logoUrl} 
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                  {exp.company.charAt(0)}
                </span>
              )}
            </div>
            
            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium dark:text-white text-black text-base sm:text-lg">
                {exp.href ? (
                  <Link 
                    href={exp.href} 
                    target="_blank" 
                    className="hover:text-[#006FEE] transition-colors"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="text-xs sm:text-sm opacity-70">
                {exp.position}
              </p>
            </div>
          </div>
          
          {/* Right side - Duration */}
          <div className="sm:text-right flex-shrink-0">
            <p className="text-xs sm:text-sm opacity-50">
              {exp.duration}
            </p>
          </div>
          </div>
          <ul className="mt-4 space-y-2 pl-4 list-disc text-sm leading-relaxed opacity-70">
            {exp.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </article>
      ))}
    </div>
  )
}
