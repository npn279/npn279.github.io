"use client";

import React from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaPrint } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Dynamically import ThemeToggle with no SSR to avoid hydration mismatch
const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false });

const Header = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <ThemeToggle />
        <button 
          onClick={handlePrint}
          className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 print-hide"
        >
          <FaPrint className="inline" /> Print CV
        </button>
      </div>
      <h1 className="text-4xl font-bold text-center mb-2">Nguyen Phuoc Nguyen</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-4">AI Research Engineer</p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <a href="tel:+84985755720" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          <FaPhone className="inline" /> (+84) 985 755 720
        </a>
        <a href="mailto:nguyenst279@gmail.com" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          <FaEnvelope className="inline" /> nguyenst279@gmail.com
        </a>
        <a href="https://github.com/npn279" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          <FaGithub className="inline" /> github.com/npn279
        </a>
        <a href="https://www.linkedin.com/in/nguyen-phuoc-nguyen/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          <FaLinkedin className="inline" /> linkedin.com/in/nguyen-phuoc-nguyen/
        </a>
      </div>
    </header>
  );
};

export default Header; 