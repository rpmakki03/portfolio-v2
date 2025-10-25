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
      setTimeout(() => setIsGlowing(false), 600) // Glow for 600ms
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span 
      className="text-[#006FEE] font-medium transition-all duration-600 ease-in-out"
      style={{
        textShadow: isGlowing ? '0 0 15px rgba(0, 111, 238, 0.8)' : 'none'
      }}
    >
      {appTypes[currentIndex]}
    </span>
  )
}
