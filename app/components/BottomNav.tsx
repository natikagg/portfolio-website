'use client'

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IconHome, IconBrandTwitter, IconMail, IconFileText, IconLayoutDashboard } from '@tabler/icons-react';

export default function BottomNav() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { icon: <IconHome size={20} strokeWidth={1.5} />, href: '/', label: 'Home' },
    { icon: <IconFileText size={20} strokeWidth={1.5} />, href: '/articles', label: 'Articles' },
    { icon: <IconBrandTwitter size={20} strokeWidth={1.5} />, href: '/twitter', label: 'Twitter' },
    { icon: <IconMail size={20} strokeWidth={1.5} />, href: '/contact', label: 'Contact Me' },
    { icon: <IconLayoutDashboard size={20} strokeWidth={1.5} />, href: '/projects', label: 'Projects' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[600px] px-4">
      <motion.div 
        className="relative w-full"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex items-center justify-between px-4 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-white/10">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <Link 
                href={item.href}
                className="p-2 rounded-full transition-colors duration-200 block"
                aria-label={item.label}
                onMouseEnter={() => setActiveTooltip(item.label)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    pathname === item.href ? 'bg-white text-black' : 'text-white/70 hover:bg-white/10 hover:text-white'
                  } flex items-center justify-center p-2 rounded-full`}
                >
                  {item.icon}
                </motion.div>
              </Link>

              <AnimatePresence>
                {activeTooltip === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-xs text-white/90 bg-black/90 rounded-full whitespace-nowrap"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </motion.div>
    </div>
  );
}
