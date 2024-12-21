'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function getRandomPosition(range: number = 50) {
  return {
    x: (Math.random() - 0.5) * range,
    y: Math.random() * 5 + 3,
    z: (Math.random() - 0.5) * range
  }
}

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.3, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 1)
    containerRef.current.appendChild(renderer.domElement)

    // Add lights
    const lights: THREE.SpotLight[] = []
    const targetPositions: { x: number; y: number; z: number }[] = []
    const currentPositions: { x: number; y: number; z: number }[] = []
    
    const colors = [
        0xff1493, // Deep Pink
        0x4169e1, // Royal Blue
        0x32cd32, // Lime Green
        0xffa500  // Orange
    ]

    // Initialize lights with random positions
    colors.forEach((color, i) => {
      const light = new THREE.SpotLight(color, 200)
      const initialPos = getRandomPosition()
      light.position.set(initialPos.x, initialPos.y, initialPos.z)
      light.angle = Math.PI / 3
      light.penumbra = 0.2
      light.decay = 0.5
      light.distance = 40
      scene.add(light)
      lights.push(light)
      
      currentPositions.push({ ...initialPos })
      targetPositions.push(getRandomPosition())
    })

    // Add ground plane
    const geometry = new THREE.PlaneGeometry(50, 50)
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x000000,
      roughness: 0.9,
      metalness: 0.5
    })
    const plane = new THREE.Mesh(geometry, material)
    plane.rotation.x = -Math.PI * 0.5
    plane.position.y = 0
    scene.add(plane)

    // Position camera
    camera.position.set(0, 10, 20)
    camera.lookAt(0, 0, 0)

    let lastUpdateTime = 0
    const updateInterval = 5000 // New positions every 5 seconds

    // Animation
    function animate(time: number) {
      const currentTime = time

      // Update target positions every few seconds
      if (currentTime - lastUpdateTime > updateInterval) {
        targetPositions.forEach((target, i) => {
          const newPos = getRandomPosition()
          target.x = newPos.x
          target.y = newPos.y
          target.z = newPos.z
        })
        lastUpdateTime = currentTime
      }

      // Smoothly move lights to target positions
      lights.forEach((light, i) => {
        const current = currentPositions[i]
        const target = targetPositions[i]
        
        // Interpolate positions
        current.x += (target.x - current.x) * 0.01
        current.y += (target.y - current.y) * 0.01
        current.z += (target.z - current.z) * 0.01

        // Update light position
        light.position.set(current.x, current.y, current.z)
        light.lookAt(0, 0, 0)
      })

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    animate(0)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        filter: 'blur(200px) brightness(1)',
        background: '#000000'
      }}
    />
  )
} 