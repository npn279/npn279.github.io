'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

// Define the experience data
const experiences = [
  {
    id: 1,
    title: 'AI Engineer',
    company: 'FPT Telecom',
    period: 'June 2023 - Present',
    description: [
      'Developing AI products related to Computer Vision, NLP, Agentic AI',
      'Using YOLOv8, Langchain, Langgraph, Python, etc.'
    ],
    logo: '/fpt-logo.png',
    technologies: ['Python', 'YOLOv8', 'Langchain', 'Langgraph']
  },
  {
    id: 2,
    title: 'AI Researcher',
    company: 'TDTU NLP-KD Lab',
    period: 'March 2023 - Present',
    description: [
      'Survey trends in AI, building datasets, developing, training and finetuning language models',
      'Using HuggingFace, Unsloth, Langchain, Langgraph, Python, Pytorch, Git, etc'
    ],
    logo: '/tdtu-logo.png',
    technologies: ['Python', 'PyTorch', 'HuggingFace', 'Git', 'Unsloth']
  }
];

const ExperienceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / slideWidth);
      if (newIndex !== currentSlide) {
        setCurrentSlide(newIndex);
      }
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Experience Cards */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto pb-8 gap-8 hide-scrollbar mx-auto justify-center md:justify-start"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
        onScroll={handleScroll}
      >
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className="w-[650px] flex-shrink-0"
          >
            <div className="bg-[#f5f9fa] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg p-6 h-[300px] flex flex-col">
              {/* Logo and Title Section - Fixed Height */}
              <div className="mb-3 flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-full p-2 flex items-center justify-center shadow-md mr-4">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      {/* Fallback text if image fails to load */}
                      <div className="flex items-center justify-center text-lg font-bold text-gray-400">
                        {exp.company.split(' ')[0][0]}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-lg text-teal-500 dark:text-teal-400">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                  </div>
                </div>
              </div>
              
              {/* Technologies - Fixed Height */}
              <div className="flex flex-wrap gap-2 mb-3 flex-shrink-0">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Description - Scrollable Area */}
              <div className="w-full overflow-y-auto flex-grow pr-2 custom-scrollbar">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 text-base">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSlider; 