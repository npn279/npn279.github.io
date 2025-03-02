import Header from '@/components/Header';
import Profile from '@/components/Profile';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import ResearchInterests from '@/components/ResearchInterests';
import Languages from '@/components/Languages';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg overflow-hidden transition-colors duration-200">
      <div className="p-6">
        <Header />
        <Profile />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <ResearchInterests />
        <Languages />
      </div>
    </main>
  );
} 