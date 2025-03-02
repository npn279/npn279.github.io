import React from 'react';

const Languages = () => {
  const languagesData = [
    { language: 'English', proficiency: 'Conversational proficiency' },
    { language: 'Vietnamese', proficiency: 'Native proficiency' }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title dark:border-gray-700">Languages</h2>
      <div className="space-y-2">
        {languagesData.map((item, index) => (
          <div key={index} className="flex">
            <span className="w-32 font-semibold dark:text-white">{item.language}</span>
            <span className="text-gray-700 dark:text-gray-300">{item.proficiency}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages; 