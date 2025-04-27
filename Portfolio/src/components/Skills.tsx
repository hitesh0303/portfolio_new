import React from 'react';

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-xl font-bold mb-4 text-blue-500">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express.js', 'TailwindCSS', 'Bootstrap']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB', 'MySQL']
    },
    {
      title: 'Core Competencies',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Problem Solving', 'Critical Thinking']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;