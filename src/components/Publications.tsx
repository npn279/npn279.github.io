import React from 'react';

const Publications = () => {
  const publicationsData = [
    {
      title: 'Adapting Large Language Models to Vietnamese Law: Pretrained LLM Refinement vs Retrieval Augmented Generation',
      authors: 'Nguyen P. Nguyen, Thang V.Q. Le, Anh-Cuong Le, Viet-Ha Nguyen, Viet-Cuong Nguyen',
      conference: 'The 16th IEEE International Conference on Knowledge and Systems Engineering (KSE 2024), 2024'
    },
    {
      title: 'Enhancing Reading Comprehension of Vietnamese LLMs with Synthetic data',
      authors: 'Thang V.Q. Le, Nguyen P. Nguyen, Trong-Chi Duong, Anh-Cuong Le, Viet-Cuong Nguyen, Viet-Ha Nguyen',
      conference: 'The 16th IEEE International Conference on Knowledge and Systems Engineering (KSE 2024) - Best Paper Award, 2024'
    },
    {
      title: 'A Framework for Vietnamese Question-Answering in Law Domain',
      authors: 'Thang V. Q. Le, Dinh-Hong Vu, Nguyen P. Nguyen, Anh-Cuong Le',
      conference: 'The 9th IEEE International Conference on Data Science in Cyberspace (IEEE DSC 2024), 2024'
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title dark:border-gray-700">Publications</h2>
      <h3 className="font-semibold mb-2 dark:text-white">Conference Proceedings</h3>
      <div className="space-y-4">
        {publicationsData.map((pub, index) => (
          <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <p className="font-medium dark:text-white">{pub.title}</p>
            <p className="text-gray-700 text-sm dark:text-gray-300">{pub.authors}</p>
            <p className="text-gray-500 text-sm italic dark:text-gray-400">{pub.conference}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications; 