'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from '@/components/theme-toggle'
import { motion } from 'framer-motion'

export default function MinimalNavigation() {
  const pathname = usePathname()
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }
  
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-700/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-4 sm:px-8 py-3 sm:py-2.5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/"
              className="text-lg sm:text-xl font-[family-name:var(--font-instrument-serif)] font-medium hover:opacity-80 hover:underline transition-opacity"
            >
              Akshat
            </Link>
          </motion.div>
          <div className="flex items-center gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/projects" 
                className={`text-sm sm:text-base font-[family-name:var(--font-instrument-serif)] hover:opacity-80 hover:underline transition-opacity ${
                  isActive('/projects') ? 'opacity-100' : 'opacity-60'
                }`}
              >
                projects
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ModeToggle />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
