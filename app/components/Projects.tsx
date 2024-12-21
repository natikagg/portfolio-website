'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Map This",
      description: "Say goodbye to information overload and hello to streamlined knowledge retention and sharing",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
      image: "https://map-this.com/logo.png",
      link: "https://www.map-this.com",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Three.js",
      technologies: ["Next.js", "Three.js", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/yourusername/portfolio",
    },
    // Add more projects as needed
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects">
      <motion.h2 
        className="text-4xl font-bold mb-16 text-white text-center tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
                quality={85}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYwRk5PS09OXnFRWVBhWl1PUWv/2wBDARUXFx4aHR4eHWtCOkJra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            </div>
            
            <div className="p-8">
              <h3 className="font-bold text-2xl mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                className="inline-flex items-center text-lg text-blue-300 hover:text-blue-200 font-medium"
                whileHover={{ x: 5 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 