'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: 'How Prompt Genie increased trial conversions by 11% within weeks',
      description: 'Prompt Genie was founded in March 2023 to address a growing need in the market for an innovative tool that helps users of ChatGPT and other AI-powered systems.',
      href: '/articles/react-server-components',
      readTime: '8 min read',
      category: 'Media Coverage',
      imageSrc: 'https://clarity.microsoft.com/case-studies/wp-content/uploads/2023/12/Ground-breaking-copy-3.png'
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox: When to Use Each',
      description: 'Learn the key differences between CSS Grid and Flexbox and when to use each.',
      href: '/articles/css-grid-vs-flexbox',
      readTime: '6 min read',
      category: 'CSS',
      imageSrc: '/api/placeholder/800/400'
    },
    {
      id: 3,
      title: 'Optimizing Web Performance with Next.js',
      description: 'Best practices to boost performance in your Next.js applications.',
      href: '/articles/nextjs-performance',
      readTime: '10 min read',
      category: 'Performance',
      imageSrc: '/api/placeholder/800/400'
    },
    {
      id: 4,
      title: 'Framer Motion: Adding Life to Your UI',
      description: 'How to use Framer Motion to create stunning animations.',
      href: '/articles/framer-motion-guide',
      readTime: '7 min read',
      category: 'Animation',
      imageSrc: '/api/placeholder/800/400'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center px-6 py-12">
      <motion.h1 
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Latest Articles
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-300 mb-16 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Discover in-depth technical content to level up your development skills
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        variants={container}
        initial="hidden"
        animate="show"
        whileHover="hover"
      >
        {articles.map((article) => (
          <motion.div
            key={article.id}
            variants={item}
            className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ y: -10 }}
          >
            <Link href={article.href} className="block h-full bg-gray-800">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  variants={imageVariants}
                >
                  <img 
                    src={article.imageSrc}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6 h-full flex flex-col">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4">
                    {article.category}
                  </span>
                  <h2 className="text-xl font-bold mb-3 text-gray-100">{article.title}</h2>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-2">{article.description}</p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock size={14} className="mr-2" />
                    {article.readTime}
                  </div>
                  <motion.div 
                    className="flex items-center text-blue-400 text-sm font-medium group"
                    whileHover={{ x: 5 }}
                  >
                    Read more
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}