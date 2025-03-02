import React from 'react';

const Education = () => {
  return (
    <section className="mb-8">
      <h2 className="section-title dark:border-gray-700">Education</h2>
      <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="job-title dark:text-white">Ton Duc Thang University</h3>
            <p className="job-company dark:text-gray-300">Senior student - Computer Science</p>
          </div>
          <div className="text-right">
            <p className="job-location dark:text-gray-400">Ho Chi Minh City, Vietnam</p>
            <p className="job-date dark:text-gray-400">Sept 2020 - Sept 2024</p>
          </div>
        </div>
        <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
          <li>Majoring in Computer Science</li>
          <li>GPA: 8.24</li>
          <li>Member of Natural Language Processing and Knowledge Discovery (NLP-KD) Lab</li>
          <li>Courses: Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Object Oriented Programming</li>
        </ul>
      </div>
    </section>
  );
};

export default Education; 