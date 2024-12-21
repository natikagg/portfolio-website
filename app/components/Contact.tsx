'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-10">Contact</h2>
      <div className="max-w-xl">
        <p className="mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="space-y-4">
          <a
            href="mailto:your.email@example.com"
            className="block hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            your.email@example.com
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
} 