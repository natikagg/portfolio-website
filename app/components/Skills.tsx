'use client'

import React from 'react';
import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar = ({ skill, level }: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-blue-200">{skill}</span>
        <span className="text-sm font-medium text-blue-200">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const skills = {
    languages: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 }
    ],
    frameworks: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Node.js", level: 85 }
    ],
    tools: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 75 }
    ]
  };

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-16">
      <motion.h2 
        className="text-4xl font-bold mb-16 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            variants={containerAnimation}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-2xl mb-8 capitalize text-white">
              {category}
            </h3>
            <div>
              {items.map((skill, index) => (
                <SkillBar 
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}