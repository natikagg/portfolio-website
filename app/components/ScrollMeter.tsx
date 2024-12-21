'use client'

import { useEffect, useState } from 'react'

export default function ScrollMeter() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const percentage = (scrolled / documentHeight) * 100
      setScrollPercentage(Math.min(percentage, 100))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100]">
      <div 
        className="absolute inset-0 bg-black/20"
      />
      <div 
        className="h-full relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ 
          width: `${scrollPercentage}%`,
          transition: 'width 0.1s ease-out'
        }}
      />
    </div>
  )
} 