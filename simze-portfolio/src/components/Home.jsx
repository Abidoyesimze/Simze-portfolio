import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiExternalLink, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { SiSolidity, SiEthereum, SiReact, SiJavascript, SiTypescript, 
    SiTailwindcss, SiWeb3Dotjs, SiNextdotjs } from 'react-icons/si';
    import { Link } from 'react-router-dom';
 import Layout from './Navbar';
    import Code from "./Code";
// import { BiHardhat } from "react-icons/bi";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`fixed right-4 top-4 z-50 rounded-full p-2 ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [isScrolling, setIsScrolling] = useState(false);

  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;

    // Handle scroll state
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  const projects = [
    {
      id: 1,
      title: "Geotrust Real Estate Platform",
      description: "A decentralized real estate platform built with Solidity and React. Users can buy and list their properties but before listed property can be sold it must be verified by the admin.",
      tech: ["Solidity", "React", "ipfs", "wagmi", "Hardhat"],
      image: "/RWA.png",
      github: "https://github.com/Abidoyesimze/Geotrust-dapp",
      live: "https://geotrust-dapp.vercel.app/"
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "An Vending Machine and token vendor This project implements a decentralized vending machine for a custom ERC20 token called YourToken. It consists of two main smart contracts: YourToken and Vendor.",
      tech: ["Next.js", "Solidity", "IPFS", "Ethers.js"],
      image: "/token.png",
      github: "https://github.com/Abidoyesimze/Digital-currency",
      live: "digital-currency-xi.vercel.app"
    },
    {
      id: 3,
      title: "",
      description: "A governance portal for DAOs with proposal creation, voting mechanisms, and treasury management.",
      tech: ["TypeScript", "React", "Solidity", "TheGraph"],
      image: "/dice.png",
      github: "https://github.com/Abidoyesimze/Dice-game",
      live: "https://dice-game-nextjs-omega.vercel.app/"
    }
  ];

  const skills = [
    { name: "Solidity", icon: <SiSolidity className="h-12 w-12" /> },
    { name: "Ethereum", icon: <SiEthereum className="h-12 w-12" /> },
    { name: "React", icon: <SiReact className="h-12 w-12" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-12 w-12" /> },
    { name: "TypeScript", icon: <SiTypescript className="h-12 w-12" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="h-12 w-12" /> },
    // { name: "Hardhat", icon: <BiHardhat className="h-12 w-12" /> },
    { name: "Web3.js", icon: <SiWeb3Dotjs className="h-12 w-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12" /> }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 to-white text-gray-900'
    }`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 z-40 w-full ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-blue-500"
          >
            Simze.dev
          </motion.div>
          <div className="hidden mr-4 space-x-8 md:flex">
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
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        id="home" 
        className="flex min-h-screen items-center justify-center pt-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.h1 
              className={`mb-6 text-5xl font-bold md:text-7xl ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              A Frontend and <span className="text-blue-400">Smart contract developer</span> <span className="text-blue-500">Blockchain</span> Lover
            </motion.h1>
            <p className="mb-8 text-xl text-gray-400">
              Building the future of Web3 with modern technologies
            </p>
            <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Abidoyesimze"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-3 hover:bg-blue-500"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/similoluwa-abidoye-8b7b982aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-3 hover:bg-blue-500"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/Simzeabidoye18"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-3 hover:bg-blue-500"
            >
              <FiTwitter className="h-6 w-6" />
            </a>
            </div>

          </motion.div>
        </div>
      </motion.section>
      <Code />
      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-4xl font-bold"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 lg:grid-cols-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex flex-col items-center justify-center"
              >
                {skill.icon}
                <p className="mt-2 text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
            
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-4xl font-bold"
          >
            Featured Projects
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 mt-4">{project.description}</p>
                  <div className="flex justify-between mt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* Footer */}
            <footer className="bg-gray-900 py-8 text-center text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Abidoyesimze"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-3 hover:bg-blue-500"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/similoluwa-abidoye-8b7b982aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-3 hover:bg-blue-500"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href=" https://x.com/Simzeabidoye18"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 p-3 hover:bg-blue-500"
            >
              <FiTwitter className="h-6 w-6" />
            </a>
          </motion.div>
          <p className="mt-6 text-gray-400">
            &copy; 2024 Simze. All rights reserved.
          </p>
        </div>
      </footer>
   

    </div>
  );
};

export default Portfolio;
