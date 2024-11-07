// src/About.jsx
import React from "react";
import { SiSolidity, SiEthereum, SiReact, SiJavascript, SiTypescript, 
    SiTailwindcss, SiWeb3Dotjs, SiNextdotjs } from 'react-icons/si';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-700 p-8">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg transform hover:scale-105 transition duration-300"
        />
        <h1 className="text-3xl md:text-5xl font-bold animate-fadeIn">Hi, I'm Similoluwa</h1>
        <p className="text-xl mt-2 animate-fadeIn animation-delay-100">Building with Code, Innovating with Purpose</p>
      </div>

      {/* Bio Section */}
      <div className="max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-8">
          I’m a passionate Web3 developer with experience in blockchain, smart contract development, and frontend technologies.
          My journey started with web development and has evolved into creating decentralized solutions that solve real-world problems.
          With a deep commitment to innovation, I’m always exploring new ways to make technology work smarter.
        </p>
      </div>

      {/* Skills Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[SiSolidity, SiEthereum, SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiWeb3Dotjs, SiNextdotjs].map((Icon, idx) => (
            <div
              key={idx}
              className="text-4xl text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Journey Section */}
      <div className="max-w-4xl mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <div className="space-y-8 text-left">
          <div className="flex items-start">
            <div className="mr-4 text-xl font-bold">2024</div>
            <p className="leading-relaxed">
              Started my journey into Web3 and blockchain development, building decentralized applications and smart contracts.
            </p>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-xl font-bold">2023</div>
            <p className="leading-relaxed">
              Completed various frontend projects using React, JavaScript, and Tailwind CSS. Developed a strong foundation in responsive design.
            </p>
          </div>
        </div>
      </div>

      
      <div className="max-w-4xl mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-2">GeoTrust - Land Registry</h3>
            <p className="text-gray-700 mb-4">A blockchain-based platform to secure land ownership. Utilizes ERC721 tokens and IPFS for document storage.</p>
            <a href="https://github.com/Abidoyesimze/Geotrust-dapp" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
          <div className="p-4 border rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-2">PharmaX - Healthcare</h3>
            <p className="text-gray-700 mb-4">A decentralized healthcare platform that integrates user profiles, smart contracts, and KYC for pharmacies and doctors.</p>
            <a href="https://github.com/Superior212/Pharmacy-Store-Onchain" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">I’m open to freelance projects, collaborations, and other opportunities.</p>
        <div className="space-x-4">
          <a href="mailto:similoluwaeyitayoabidoye@gmail.com" className="text-blue-600 hover:underline">similoluwaeyitayoabidoye@gmail.com</a>
          <a href="https://www.linkedin.com/in/similoluwa-abidoye-8b7b982aa/ " className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://x.com/Simzeabidoye18" className="text-blue-600 hover:underline">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default About;
