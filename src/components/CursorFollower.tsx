'use client'

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasFinePointer, setHasFinePointer] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const pointerX = useMotionValue(-20)
  const pointerY = useMotionValue(-20)
  const x = useSpring(pointerX, { stiffness: 850, damping: 48, mass: 0.18 })
  const y = useSpring(pointerY, { stiffness: 850, damping: 48, mass: 0.18 })

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)')

    const updatePointerType = () => setHasFinePointer(pointerQuery.matches)
    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX - 5)
      pointerY.set(event.clientY - 5)
      setIsVisible(true)
    }
    const handlePointerLeave = () => setIsVisible(false)

    updatePointerType()
    pointerQuery.addEventListener('change', updatePointerType)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)

    return () => {
      pointerQuery.removeEventListener('change', updatePointerType)
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [pointerX, pointerY])

  if (!hasFinePointer || prefersReducedMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] size-2.5 rounded-full bg-white mix-blend-difference"
      style={{ x, y }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ opacity: { duration: 0.15 }, scale: { duration: 0.15 } }}
    />
  )
}
