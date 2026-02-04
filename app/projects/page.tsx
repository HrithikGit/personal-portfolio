import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-12">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my technical expertise and problem-solving abilities through various projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="relative h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cloud-Based Data Processing System</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A scalable data processing system built with AWS services, handling large datasets efficiently.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Lambda</span>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo →
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code →
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="relative h-48 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">💻</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">React Portfolio Website</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A modern, responsive portfolio website built with Next.js and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Tailwind</span>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live →
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code →
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative h-48 bg-gradient-to-r from-green-500/10 to-blue-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI-Powered Task Manager</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              An intelligent task management system with AI-driven prioritization and scheduling.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">TensorFlow</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">FastAPI</span>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo →
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code →
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-800 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative h-48 bg-gradient-to-r from-yellow-500/10 to-red-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🔒</span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Secure Authentication System</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A robust authentication system with multi-factor authentication and role-based access control.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">Express</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">MongoDB</span>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo →
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/experience"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors hover-lift hover-glow"
        >
          View Experience
        </Link>
      </div>
    </div>
  );
} 