import React from 'react';
import { Download } from 'lucide-react';

const TimelineItem = ({ year, institution, field, performance }: {
  year: string;
  institution: string;
  field: string;
  performance: string;
}) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-200 dark:bg-blue-900"></div>
    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
      <span className="text-sm text-blue-500 font-semibold">{year}</span>
      <h3 className="text-lg font-bold mt-2">{institution}</h3>
      <p className="text-gray-600 dark:text-gray-400">{field}</p>
      <p className="text-gray-500 dark:text-gray-500 mt-1">{performance}</p>
    </div>
  </div>
);

const About = () => {
  const education = [
    {
      year: '2020',
      institution: 'Sardar Vallabhbhai Patel Vidyalaya, Thane',
      field: 'Secondary Education',
      performance: 'Percentage: 96%'
    },
    {
      year: '2022',
      institution: 'L.R. Tiwari College of Engineering, Thane',
      field: 'Science',
      performance: 'Percentage: 89%'
    },
    {
      year: '2023-2026',
      institution: 'Pune Institute of Computer Technology, Pune',
      field: 'Information Technology',
      performance: 'GPA: 8.72'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="mb-12 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {education.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;