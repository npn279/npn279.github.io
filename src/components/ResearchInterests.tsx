import React from 'react';

const ResearchInterests = () => {
  const interests = [
    'Natural Language Processing',
    'Retrieval-Augmented Generation',
    'Large Language Models'
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title dark:border-gray-700">Research Interests</h2>
      <ul className="list-disc ml-5">
        {interests.map((interest, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default ResearchInterests; 