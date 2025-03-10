'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Rotate the circles slowly
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);
    
    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Circular Design with Profile */}
      <div className="relative">
        {/* Outer Circle */}
        <div 
          className="w-[600px] h-[600px] rounded-full border border-gray-200 dark:border-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
          style={{ 
            animationDuration: '15s',
            transform: `translate(-50%, -50%) rotate(${rotation * 0.5}deg)`,
            background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(219,234,254,0.1) 100%)',
          }}
        >
          {/* Dots on outer circle */}
          <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1.5 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 w-3 h-3 -translate-x-1/2 translate-y-1.5 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"></div>
          <div className="absolute left-0 top-1/2 w-3 h-3 -translate-x-1.5 -translate-y-1/2 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"></div>
          <div className="absolute right-0 top-1/2 w-3 h-3 translate-x-1.5 -translate-y-1/2 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"></div>
        </div>
        
        {/* Middle Circle */}
        <div 
          className="w-[450px] h-[450px] rounded-full border border-gray-200 dark:border-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
          style={{ 
            animationDuration: '10s',
            transform: `translate(-50%, -50%) rotate(${-rotation * 0.8}deg)`,
            background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(191,219,254,0.1) 100%)',
          }}
        >
          {/* Dots on middle circle */}
          <div className="absolute top-0 left-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1.5 bg-purple-500/30 dark:bg-purple-400/30 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 -translate-x-1/2 translate-y-1.5 bg-purple-500/30 dark:bg-purple-400/30 rounded-full"></div>
          <div className="absolute left-0 top-1/2 w-2.5 h-2.5 -translate-x-1.5 -translate-y-1/2 bg-purple-500/30 dark:bg-purple-400/30 rounded-full"></div>
          <div className="absolute right-0 top-1/2 w-2.5 h-2.5 translate-x-1.5 -translate-y-1/2 bg-purple-500/30 dark:bg-purple-400/30 rounded-full"></div>
        </div>
        
        {/* Inner Circle */}
        <div 
          className="w-[300px] h-[300px] rounded-full border border-gray-200 dark:border-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
          style={{ 
            animationDuration: '5s',
            transform: `translate(-50%, -50%) rotate(${rotation * 1.2}deg)`,
            background: 'radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(147,197,253,0.1) 100%)',
          }}
        >
          {/* Dots on inner circle */}
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1 bg-green-500/30 dark:bg-green-400/30 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 translate-y-1 bg-green-500/30 dark:bg-green-400/30 rounded-full"></div>
          <div className="absolute left-0 top-1/2 w-2 h-2 -translate-x-1 -translate-y-1/2 bg-green-500/30 dark:bg-green-400/30 rounded-full"></div>
          <div className="absolute right-0 top-1/2 w-2 h-2 translate-x-1 -translate-y-1/2 bg-green-500/30 dark:bg-green-400/30 rounded-full"></div>
        </div>
        
        {/* Profile Image Circle */}
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
          <Image 
            src="/placeholder-profile.jpg" 
            alt="Profile" 
            fill
            style={{objectFit: 'cover'}}
            priority
            className="hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>
      
      {/* AI Engineer Text */}
      <div className="mt-[350px] text-center">
        <p className="text-gray-600 dark:text-gray-400 tracking-[0.3em] uppercase text-sm mb-4 animate-fadeIn">
          A I &nbsp; E N G I N E E R
        </p>
        
        {/* Dynamic Title with Typewriter */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center justify-center animate-fadeIn min-h-[60px]">
          <Typewriter
            options={{
              strings: ['Hi, my name is Nguyen!', 'I\'m an AI Engineer', 'and I love Technology', 'and I\'m addicted to ☕'],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 40,
              wrapperClassName: 'typewriter-wrapper',
              cursorClassName: 'typewriter-cursor',
            }}
          />
        </h1>
      </div>
      
      {/* Navigation Links */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 animate-fadeIn">
        <Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white uppercase tracking-widest text-sm transition-colors hover:scale-110 transform duration-300">
          About
        </Link>
        <Link href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white uppercase tracking-widest text-sm transition-colors hover:scale-110 transform duration-300">
          Experience
        </Link>
        <Link href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white uppercase tracking-widest text-sm transition-colors hover:scale-110 transform duration-300">
          Skills
        </Link>
        <Link href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white uppercase tracking-widest text-sm transition-colors hover:scale-110 transform duration-300">
          Projects
        </Link>
        <Link href="#publications" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white uppercase tracking-widest text-sm transition-colors hover:scale-110 transform duration-300">
          Publications
        </Link>
      </div>
      
      {/* Scroll Down Button */}
      <div className="absolute bottom-8 animate-bounce">
        <Link href="#about" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>

      {/* Floating particles for visual effect */}
      {mounted && (
        <>
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/20 rounded-full animate-float" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-3/4 left-1/3 w-6 h-6 bg-purple-500/20 rounded-full animate-float" style={{ animationDuration: '25s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-green-500/20 rounded-full animate-float" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-500/20 rounded-full animate-float" style={{ animationDuration: '18s' }}></div>
        </>
      )}
    </section>
  );
};

export default Hero;
