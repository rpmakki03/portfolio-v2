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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % appTypes.length)
    }, 800) // Change every 0.8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="text-[#006FEE] transition-all duration-300 ease-in-out">
      {appTypes[currentIndex]}
    </span>
  )
}
