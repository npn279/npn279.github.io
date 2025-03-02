import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: 'Developing Small Vietnamese Legal LLM that can handle specific problems',
      organization: 'TDTU NLP-KD Lab',
      location: 'Ho Chi Minh City, Vietnam',
      period: 'Jan 2024 - Aug 2024',
      details: [
        'Continued-pretrain small LLMs, Sailor-1.8B and Qwen2-1.5B, on Vietnamese data to improve language understanding.',
        'Build legal dataset for pre-training, fine-tuning, evaluating in different types such as Question Answering, Fill-in-the-middle, NLI, etc.',
        'Fine-tune models using ORPO, LoRA, QLoRA, MoRA, etc.',
        'Technical Skills: Huggingface, Unsloth, Git, LoRA, MoRA, ORPO, etc.',
        'Soft Skills: Report writing, Logical Thinking, Teamwork, Time Management, Organizing.'
      ]
    },
    {
      title: 'Building datasets for pre-training and fine-tuning Large Language Models',
      organization: 'TDTU NLP-KD Lab',
      location: 'Ho Chi Minh City, Vietnam',
      period: '2023 - Present',
      details: [
        'Pre-training datasets: scraping and extracting texts from webs, cleaning data',
        'Fine-tuning datasets: building a variety of datasets for fine-tuning models in different tasks such as summarization, question answering, translation, etc. The data collected from different domains such as Legal, Health, News, Education, etc.',
        'Technical Skills: Scrapy, BeautifulSoup, Trafilatura, etc.',
        'Soft Skills: Time Management, Teamwork, Organizing.'
      ]
    },
    {
      title: 'Education Assistant',
      organization: 'TDTU NLP-KD Lab',
      location: 'Ho Chi Minh City, Vietnam',
      period: 'Feb 2024 - Present',
      details: [
        'Build Education Assistant using Retrieval-augmented Generation (RAG) on specific universities\' knowledge.',
        'Apply multiple techniques to improve RAG system like Query Expansion, Intent Classification, Hybrid Search, Re-ranking.',
        'Technical Skills: Python, Elasticsearch, OpenAI API, Gemini API, Cohere Re-rank API, LlamaIndex, etc.',
        'Soft Skills: Presentation skills, Teamwork, Logical Thinking.'
      ]
    },
    {
      title: 'Legal Assistant',
      organization: 'Ton Duc Thang University',
      location: 'Ho Chi Minh City, Vietnam',
      period: 'Dec 2023 - Apr 2024',
      details: [
        'Build Legal Assistant using Retrieval-augmented Generation (RAG).',
        'Apply multiple techniques to improve RAG system like Query Expansion, Intent Classification, Hybrid Search, Re-ranking.',
        'Technical Skills: Python, Elasticsearch, OpenAI API, Gemini API, Cohere Re-rank API, LlamaIndex, etc.',
        'Soft Skills: Presentation skills, Teamwork, Logical Thinking.'
      ]
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title dark:border-gray-700">Projects</h2>
      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="job-title dark:text-white">{project.title}</h3>
                <p className="job-company dark:text-gray-300">{project.organization}</p>
              </div>
              <div className="text-right">
                <p className="job-location dark:text-gray-400">{project.location}</p>
                <p className="job-date dark:text-gray-400">{project.period}</p>
              </div>
            </div>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 
 