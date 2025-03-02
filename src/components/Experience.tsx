import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      title: 'AI Engineer',
      company: 'FPT Telecom',
      location: 'Ho Chi Minh City, Vietnam',
      period: 'Jun 2023 - Present',
      responsibilities: [
        'Collaborated with the Software Team to develop a system that leveraged YOLOv8, PaddleOCR, and several other models. This system was designed to aid the Monitoring Team in testing and monitoring devices across provinces in southern Vietnam. We aimed to enhance efficiency and reduce the workload by automating the detection of certain problems on the devices.',
        'Technical Skills: Python with PyTorch, NumPy, Pandas, Git, etc.',
        'Soft Skills: Teamwork, Time Management, Organizing'
      ]
    },
    {
      title: 'AI Researcher',
      company: 'TDTU NLP-KD Lab',
      location: 'Ho Chi Minh City, Vietnam',
      period: 'Mar 2023 - Present',
      responsibilities: [
        'Build datasets for training, evaluating Large Language Models (LLMs).',
        'Survey cutting edge techniques to improve Vietnamese LLMs.',
        'Build and fine-tune models on different tasks using latest methods such as LoRA, QLoRA, ORPO, MoRA, etc.',
        'Technical Skills: Python, PyTorch, Huggingface, Git, Unsloth, etc.',
        'Soft Skills: Teamwork, Time Management, Organizing'
      ]
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title dark:border-gray-700">Work Experience</h2>
      <div className="space-y-6">
        {experienceData.map((job, index) => (
          <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="job-title dark:text-white">{job.title}</h3>
                <p className="job-company dark:text-gray-300">{job.company}</p>
              </div>
              <div className="text-right">
                <p className="job-location dark:text-gray-400">{job.location}</p>
                <p className="job-date dark:text-gray-400">{job.period}</p>
              </div>
            </div>
            <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 