'use client'

import { useState, useEffect } from 'react'

const appTypes = [
  'decentralized applications',
  'frontend applications', 
  'full stack applications',
  'backend applications',
  'defi applications'
]

export default function AnimatedAppType() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGlowing, setIsGlowing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % appTypes.length)
      
      // Trigger glow effect
      setIsGlowing(true)
      setTimeout(() => setIsGlowing(false), 500) // Glow for 500ms
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`
      inline-block px-3 py-1 rounded-lg border-2 border-[#006FEE] 
      text-[#006FEE] font-medium transition-all duration-500 ease-in-out
      ${isGlowing ? 'shadow-[0_0_20px_rgba(0,111,238,0.6)] bg-[#006FEE]/10' : 'shadow-none bg-transparent'}
    `}>
      {appTypes[currentIndex]}
    </span>
  )
}
