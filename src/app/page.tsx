import React from 'react';
import Hero from '@/components/Hero';
import Image from 'next/image';
import ExperienceSlider from '@/components/ExperienceSlider';

export default function Home() {
  return (
    <main className="text-gray-900 dark:text-white">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-teal-100 dark:from-blue-950/80 dark:via-gray-900 dark:to-teal-950/80 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 dark:via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 dark:via-teal-500/50 to-transparent"></div>
        
        {/* Connecting element to next section - bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-teal-500/20 dark:bg-teal-500/30 rounded-full blur-3xl -mb-20 z-0"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-center text-4xl font-light tracking-[0.3em] uppercase mb-16 text-gray-600 dark:text-gray-300">
            A B O U T
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side - Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-teal-500/30 dark:from-blue-500/40 dark:to-teal-500/40 mix-blend-overlay"></div>
                <Image 
                  src="/profile.jpg" 
                  alt="Nguyen Phuoc Nguyen" 
                  width={600}
                  height={700}
                  className="w-full object-cover transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-6">Here is a little background</h3>
              
              <div className="space-y-4 text-lg">
                <p>
                  I am Nguyen Phuoc Nguyen, a graduated student majored in Computer Science at Ton Duc Thang University. My interests include developing advanced Vietnamese Large Language Models for widespread use in Vietnam and other countries.
                </p>
                <p>
                  I also enjoy building high‑quality datasets to enhance model performance. Dedicated to AI/ML engineering, I have experienced as AI Engineer at FPT Telecom and AI Researcher at TDTU NLP‑KD Lab, where I participated in several projects related to Natural Language Processing and Computer Vision.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/30 dark:bg-blue-500/40 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-teal-500/30 dark:bg-teal-500/40 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0)_0%,rgba(219,234,254,0.3)_100%)] dark:bg-[radial-gradient(circle,rgba(30,41,59,0)_0%,rgba(56,189,248,0.15)_100%)] pointer-events-none"></div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-100 via-white to-green-100 dark:from-teal-950/80 dark:via-gray-900 dark:to-green-950/80 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 dark:via-teal-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 dark:via-green-500/50 to-transparent"></div>
        
        {/* Connecting element from previous section - top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl -mt-20 z-0"></div>
        
        {/* Connecting element to next section - bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-green-500/20 dark:bg-green-500/30 rounded-full blur-3xl -mb-20 z-0"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-center text-4xl font-light tracking-[0.3em] uppercase mb-16 text-gray-600 dark:text-gray-300">
            E X P E R I E N C E
          </h2>
          
          <ExperienceSlider />
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500/30 dark:bg-teal-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green-500/30 dark:bg-green-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(186,230,253,0.3)_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0)_0%,rgba(20,184,166,0.15)_100%)] pointer-events-none"></div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-white to-purple-100 dark:from-green-950/80 dark:via-gray-900 dark:to-purple-950/80 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 dark:via-green-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 dark:via-purple-500/50 to-transparent"></div>
        
        {/* Connecting element from previous section - top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-teal-500/20 dark:bg-teal-500/30 rounded-full blur-3xl -mt-20 z-0"></div>
        
        {/* Connecting element to next section - bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl -mb-20 z-0"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-center text-4xl font-light tracking-[0.3em] uppercase mb-16 text-gray-600 dark:text-gray-300">
            S K I L L S
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">Natural Language Processing</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">Computer Vision</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">Large Language Models</span>
              </div>
            </div>
            
            {/* Programming */}
            <div className="bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Programming</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">Python</span>
              </div>
            </div>
            
            {/* Tools & Platforms */}
            <div className="bg-white/90 backdrop-blur-sm dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">Git</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">Docker</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">AWS</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">Linux</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">VS Code</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">Jupyter</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-base">HuggingFace</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-green-500/30 dark:bg-green-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '25s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-500/30 dark:bg-purple-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '30s' }}></div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 via-white to-indigo-100 dark:from-purple-950/80 dark:via-gray-900 dark:to-indigo-950/80 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 dark:via-purple-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 dark:via-indigo-500/50 to-transparent"></div>
        
        {/* Connecting element from previous section - top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-green-500/20 dark:bg-green-500/30 rounded-full blur-3xl -mt-20 z-0"></div>
        
        {/* Connecting element to next section - bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl -mb-20 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-center text-4xl font-light tracking-[0.3em] uppercase mb-16 text-gray-600 dark:text-gray-300">
            P R O J E C T S
          </h2>
          
          <div className="flex overflow-x-auto pb-12 gap-8 hide-scrollbar snap-x snap-mandatory">
            {/* Project 1 */}
            <div className="w-[800px] flex-shrink-0 snap-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-[450px] flex flex-col">
                <div className="p-8 flex-grow overflow-y-auto custom-scrollbar">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Developing Small Vietnamese Legal LLM</h3>
                  <p className="text-xl text-teal-500 dark:text-teal-400 mb-1">TDTU NLP-KD Lab</p>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-5">Jan 2024 - Aug 2024 • Ho Chi Minh City, Vietnam</p>
                  
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li className="text-gray-700 dark:text-gray-300 text-base">Continued-pretrain small LLMs, <span className="italic">Sailor-1.8B</span> and <span className="italic">Qwen2-1.5B</span>, on Vietnamese data to improve language understanding.</li>
                    <li className="text-gray-700 dark:text-gray-300 text-base">Build legal dataset for pre-training, fine-tuning, evaluating in different types such as Question Answering, Fill-in-the-middle, NLI, etc.</li>
                    <li className="text-gray-700 dark:text-gray-300 text-base">Fine-tune models using ORPO, LoRA, QLoRA, MoRA, etc.</li>
                  </ul>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Technical Skills:</span>
                      <span className="text-gray-700 dark:text-gray-300"> HuggingFace, Unsloth, Git, LoRA, MoRA, ORPO, etc.</span>
                    </div>
                    {/* <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Soft Skills:</span>
                      <span className="text-gray-700 dark:text-gray-300"> Report writing, Logical Thinking, Teamwork, Time Management, Organizing.</span>
                    </div> */}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 flex justify-center space-x-6 border-t border-gray-100 dark:border-gray-600">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/huggingface-logo.png" alt="Huggingface" width={24} height={24}/>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/openai-logo.png" alt="OpenAI" width={24} height={24}/>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/unsloth-logo.png" alt="Unsloth" width={24} height={24}/>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="w-[800px] flex-shrink-0 snap-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-[450px] flex flex-col">
                <div className="p-8 flex-grow overflow-y-auto custom-scrollbar">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Building datasets for LLMs</h3>
                  <p className="text-xl text-teal-500 dark:text-teal-400 mb-1">TDTU NLP-KD Lab</p>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-5">2023 - Present • Ho Chi Minh City, Vietnam</p>
                  
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li className="text-gray-700 dark:text-gray-300 text-base">Pre-training datasets: scraping and extracting texts from webs, cleaning data</li>
                    <li className="text-gray-700 dark:text-gray-300 text-base">Fine-tuning datasets: building a variety of datasets for fine-tuning models in different tasks such as summarization, question answering, translation, etc.</li>
                    <li className="text-gray-700 dark:text-gray-300 text-base">The data collected from different domains such as Legal, Health, News, Education, etc.</li>
                  </ul>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Technical Skills:</span>
                      <span className="text-gray-700 dark:text-gray-300"> Scrapy, BeautifulSoup, Trafilatura, etc.</span>
                    </div>
                    {/* <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Soft Skills:</span>
                      <span className="text-gray-700 dark:text-gray-300"> Time Management, Teamwork, Organizing.</span>
                    </div> */}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 flex justify-center space-x-6 border-t border-gray-100 dark:border-gray-600">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/python-logo.png" alt="Python" width={24} height={24}/>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/huggingface-logo.png" alt="Huggingface" width={24} height={24}/>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/openai-logo.png" alt="OpenAI" width={24} height={24}/>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="w-[800px] flex-shrink-0 snap-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-[450px] flex flex-col">
                <div className="p-8 flex-grow overflow-y-auto custom-scrollbar">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Education Assistant</h3>
                  <p className="text-xl text-teal-500 dark:text-teal-400 mb-1">TDTU NLP-KD Lab</p>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-5">Feb 2024 - Present • Ho Chi Minh City, Vietnam</p>
                  
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li className="text-gray-700 dark:text-gray-300 text-base">Build Education Assistant using Retrieval-augmented Generation (RAG) on specific universities&apos; knowledge.</li>
                    <li className="text-gray-700 dark:text-gray-300 text-base">Apply multiple techniques to improve RAG system like Query Expansion, Intent Classification, Hybrid Search, Re-ranking.</li>
                  </ul>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Technical Skills:</span>
                      <span className="text-gray-700 dark:text-gray-300"> Python, Elasticsearch, OpenAI API, Gemini API, Cohere Re-rank API, LlamaIndex, etc.</span>
                    </div>
                    {/* <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Soft Skills:</span>
                      <span className="text-gray-700 dark:text-gray-300"> Presentation skills, Teamwork, Logical Thinking.</span>
                    </div> */}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 flex justify-center space-x-6 border-t border-gray-100 dark:border-gray-600">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/python-logo.png" alt="Python" width={24} height={24}/>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/openai-logo.png" alt="OpenAI" width={24} height={24}/>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/llamaindex-logo.png" alt="LlamaIndex" width={24} height={24}/>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="w-[800px] flex-shrink-0 snap-center">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-[450px] flex flex-col">
                <div className="p-8 flex-grow overflow-y-auto custom-scrollbar">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Legal Assistant</h3>
                  <p className="text-xl text-teal-500 dark:text-teal-400 mb-1">Ton Duc Thang University</p>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-5">Dec 2023 - Apr 2024 • Ho Chi Minh City, Vietnam</p>
                  
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li className="text-gray-700 dark:text-gray-300 text-base">Build Legal Assistant using Retrieval-augmented Generation (RAG).</li>
                    <li className="text-gray-700 dark:text-gray-300 text-base">Apply multiple techniques to improve RAG system like Query Expansion, Intent Classification, Hybrid Search, Re-ranking.</li>
                  </ul>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Technical Skills:</span>
                      <span className="text-gray-700 dark:text-gray-300"> Python, Elasticsearch, OpenAI API, Gemini API, Cohere Re-rank API, LlamaIndex, etc.</span>
                    </div>
                    {/* <div>
                      <span className="font-bold text-gray-800 dark:text-gray-200">Soft Skills:</span>
                      <span className="text-gray-700 dark:text-gray-300"> Presentation skills, Teamwork, Logical Thinking.</span>
                    </div> */}
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 flex justify-center space-x-6 border-t border-gray-100 dark:border-gray-600">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/python-logo.png" alt="Python" width={24} height={24}/>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/openai-logo.png" alt="OpenAI" width={24} height={24}/>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src="/llamaindex-logo.png" alt="LlamaIndex" width={24} height={24}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/30 dark:bg-purple-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-500/30 dark:bg-indigo-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0)_0%,rgba(233,213,255,0.3)_100%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(30,41,59,0)_0%,rgba(139,92,246,0.15)_100%)] pointer-events-none"></div>
      </section>
      
      {/* Publications Section */}
      <section id="publications" className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-100 via-white to-blue-100 dark:from-indigo-950/80 dark:via-gray-900 dark:to-blue-950/80 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 dark:via-indigo-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 dark:via-blue-500/50 to-transparent"></div>
        
        {/* Connecting element from previous section - top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl -mt-20 z-0"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-center text-4xl font-light tracking-[0.3em] uppercase mb-16 text-gray-600 dark:text-gray-300">
            P U B L I C A T I O N S
          </h2>
          
          <div className="space-y-12">
            {/* Publication 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Adapting Large Language Models to Vietnamese Law: Pretrained LLM Refinement vs Retrieval Augmented Generation
                  </h3>
                  <p className="text-lg text-teal-500 dark:text-teal-400 mb-2">
                  The 16th IEEE International Conference on Knowledge and Systems Engineering (KSE 2024)
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    <span className="font-semibold">Authors:</span> Nguyen P. Nguyen, Thang V.Q. Le, Anh‑Cuong Le, Viet‑Ha Nguyen, Viet‑Cuong Nguyen
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    Large Language Models (LLMs) have shown theirpotential in a wide range of tasks, but much of their development has been concentrated on the English language. This focus has created a noticeable gap in the availability of LLMs for other languages, as well as in specialized domains such as legal contexts. In this study, we aim to address this gap by developing a Vietnamese Large Language Model and building a Retrieval-Augmented Generation (RAG) system within legal settings. Our methodology includes building and processing legal datasets, followed by training the LLM specifically for Vietnamese legal applications. Our findings suggest that both the LLM and the RAG system perform well in retaining legal knowledge and providing more reliable answers to legal inquiries. These results highlight the potential of these approaches for legal tasks in the Vietnamese language. This research not only contributes to the application of AI in the legal field but also offers important insights into the development of AI solutions for non-English languages, addressing a critical gap in current AI research and supporting more inclusive language model applications.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Small Language Model</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Retrieval Augmented Generation</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Natural Language Processing</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Legal NLP</span>
                  </div>
                </div>
                <div className="md:w-1/4 flex flex-col justify-center space-y-3">
                  <button 
                    disabled
                    className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF (Coming Soon)
                  </button>
                  <button 
                    disabled
                    className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Online (Coming Soon)
                  </button>
                  <button 
                    disabled
                    className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Code (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
            
            {/* Publication 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Enhancing Reading Comprehension of Vietnamese LLMs with Synthetic data
                  </h3>
                  <p className="text-lg text-teal-500 dark:text-teal-400 mb-2">
                    The 16th IEEE International Conference on Knowledge and Systems Engineering (KSE 2024) ‑ Best Paper Award
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    <span className="font-semibold">Authors:</span> Thang V.Q. Le, Nguyen P. Nguyen, Trong‑Chi Duong, Anh‑Cuong Le, Viet‑Cuong Nguyen, Viet‑Ha Nguyen
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    Large Language Models (LLMs) have demonstrated remarkable capabilities in addressing a wide array of general problems. However, there is a growing recognition of the need for domain-specific expertise in certain fields. This has led to an emerging trend in the development of specialized LLMs, often referred to as expert models. In line with this trend, our research presents the development of Vilaw, a small language model specifically designed for the Vietnamese legal domain. Our approach combines innovative techniques to enhance model performance, including the use of legal synthetic data and experiments on Small Language Models (SLMs) for continuing pre-training and supervised fine-tuning in the legal domain. We created new types of synthetic data by adding question-answering generated with legal data in pre-training phase and developed a three-level of Bloom&apos;s taxonomy SFT dataset: knowledge, comprehension and application, especially legal syllogism question-answering data. The results demonstrate significant improvements in the model&apos;s capabilities within the Vietnamese legal context compared to baseline models. Our Vilaw model exhibit enhanced legal reasoning and knowledge application, showcasing the effectiveness of our domain-specific training approach.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Small Language Model</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Synthetic Data</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Natural Language Processing</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Legal NLP</span>
                  </div>
                </div>
                <div className="md:w-1/4 flex flex-col justify-center space-y-3">
                  <button 
                    disabled
                    className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF (Coming Soon)
                  </button>
                  <button 
                    disabled
                    className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Online (Coming Soon)
                  </button>
                  <button 
                    disabled
                    className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-500 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Code (Coming Soon)
                  </button>
                </div>
              </div>
            </div>

            {/* Publication 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    A Framework for Vietnamese Question‑Answering in Law Domain
                  </h3>
                  <p className="text-lg text-teal-500 dark:text-teal-400 mb-2">
                    The 9th IEEE International Conference on Data Science in Cyberspace (IEEE DSC 2024)
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    <span className="font-semibold">Authors:</span> Thang V. Q. Le, Dinh‑Hong Vu, Nguyen P. Nguyen, Anh‑Cuong Le
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                  The popularity of building question-answering systems using Large Language Models (LLMs) has surged. Many projects leverage the Retrieval Augmented Generated (RAG) technique, involving two basic steps: retrieval and reading. In this research, we introduce an enhanced approach, termed CRRR (Classifier - Rewrite - Retriever - Reader), tailored for the Vietnamese legal domain. Our framework begins with a classifier to discern whether a given question pertains to law. Rather than solely focusing on refining LLM or embedding models for better responses, we prioritize enhancing the process of rewriting input questions. These rewritten queries are then utilized by a search engine to gather external information, aiding the reader in generating answers. The rewriter component is trainable using reinforcement learning, incorporating feedback from both human and AI sources.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Retrieval Augmented Generation</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Natural Language Processing</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">Legal NLP</span>
                  </div>
                </div>
                <div className="md:w-1/4 flex flex-col justify-center space-y-3">
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/10859086" 
                    className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    PDF
                  </a>
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/10859086" 
                    className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Online
                  </a>
                  <a 
                    href="https://ieeexplore.ieee.org/abstract/document/10859086" 
                    className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-indigo-500/30 dark:bg-indigo-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '22s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500/30 dark:bg-blue-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '28s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0)_0%,rgba(224,231,255,0.3)_100%)] dark:bg-[radial-gradient(circle,rgba(30,41,59,0)_0%,rgba(79,70,229,0.15)_100%)] pointer-events-none"></div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-indigo-100 dark:from-blue-950/80 dark:via-gray-900 dark:to-indigo-950/80 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 dark:via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 dark:via-indigo-500/50 to-transparent"></div>
        
        {/* Connecting element from previous section - top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl -mt-20 z-0"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-center text-4xl font-light tracking-[0.3em] uppercase mb-16 text-gray-600 dark:text-gray-300">
            C O N T A C T
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">I have got just what you need. <span className="text-blue-500 dark:text-blue-400">Lets talk.</span></h3>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-8 mb-12">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg">+84 985 755 720</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg">nguyenst279@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center text-teal-500 dark:text-teal-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg">Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-500/30 dark:bg-blue-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '22s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-indigo-500/30 dark:bg-indigo-500/40 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '28s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0)_0%,rgba(224,231,255,0.3)_100%)] dark:bg-[radial-gradient(circle,rgba(30,41,59,0)_0%,rgba(79,70,229,0.15)_100%)] pointer-events-none"></div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-8 relative overflow-hidden border-t border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/40 dark:via-gray-600/50 to-transparent"></div>
        
        <div className="relative z-10 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 Nguyen Phuoc Nguyen. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.linkedin.com/in/nguyen-phuoc-nguyen/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://x.com/Pien279" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://github.com/npn279" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.688.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Connecting element from previous section - top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl -mt-20 z-0"></div>
      </footer>
    </main>
  );
}
