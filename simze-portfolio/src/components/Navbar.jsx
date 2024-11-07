import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Layout = ({ children, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-blue-500"
          >
            Simze.dev
          </motion.div>
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 dark:text-white"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
            {/* Navbar Links */}
            <div className={`flex space-x-8 ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex`}>
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-blue-500"
                >
                  <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-500">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed right-4 top-4 z-50 rounded-full p-2 bg-gray-700"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <FiSun className="h-6 w-6" />
        ) : (
          <FiMoon className="h-6 w-6" />
        )}
      </button>

      {/* Page Content */}
      <div className="pt-24">{children}</div>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-800 text-center text-white">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Abidoyesimze"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 hover:bg-blue-500"
            aria-label="Visit my GitHub"
          >
            <FiGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/similoluwa-abidoye-8b7b982aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 hover:bg-blue-500"
            aria-label="Visit my LinkedIn"
          >
            <FiLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/Simzeabidoye18"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 hover:bg-blue-500"
            aria-label="Visit my Twitter"
          >
            <FiTwitter className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
