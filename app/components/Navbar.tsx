'use client'

import { motion } from "framer-motion";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-[90]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="font-bold text-xl"></span>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={handleScroll}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 