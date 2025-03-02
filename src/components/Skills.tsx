import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming',
      skills: 'Machine Learning, Deep Learning with Python, Pandas, PyTorch, NumPy, Scikit-learn, Huggingface, etc.'
    },
    {
      category: 'Natural Language Processing',
      skills: 'Training and fine-tuning LLMs such as Llama, Qwen, Bert, T5, etc. with HuggingFace Trainer, Unsloth, etc. Retrieval-Augmented Generation (RAG), Elastic Search, CohereAI API, GPT APIs, Gemini APIs, etc.'
    },
    {
      category: 'Computer Vision',
      skills: 'Fine-tuning CV models such as YOLO, PaddleOCR for Object Detection, Segmentation, OCR tasks.'
    },
    {
      category: 'Soft Skills',
      skills: 'Time Management, Teamwork, Problem-solving, Documentation, Organizing.'
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title dark:border-gray-700">Skills</h2>
      <div className="space-y-4">
        {skillsData.map((item, index) => (
          <div key={index}>
            <span className="skill-category dark:text-gray-200">{item.category}:</span>{' '}
            <span className="skill-item dark:text-gray-300">{item.skills}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 