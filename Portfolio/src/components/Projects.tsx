import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demo?: string;
  code?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Law Chatbot',
    description: 'An AI-powered chatbot that provides legal information and assistance to users. Built with natural language processing capabilities to understand and respond to legal queries.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Flask'],
    demo: 'https://demo.example.com/law-chatbot',
    code: 'https://github.com/hitesh0303/law-chatbot',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80'
  },
  {
    title: 'Netflix Clone',
    description: 'A full-stack Netflix clone featuring user authentication, movie browsing, and streaming capabilities. Implements modern web development practices and responsive design.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'API Integration'],
    demo: 'https://demo.example.com/netflix-clone',
    code: 'https://github.com/hitesh0303/netflix-clone',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80'
  },
  {
    title: 'Amazon Clone',
    description: 'An e-commerce platform clone with features like product listing, cart management, and payment integration. Focuses on user experience and scalable architecture.',
    technologies: ['Next.js', 'Redux', 'Stripe', 'MongoDB'],
    demo: 'https://demo.example.com/amazon-clone',
    code: 'https://github.com/hitesh0303/amazon-clone',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9ufGVufDB8fDB8fHww'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">Click to learn more</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-6 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    View Demo
                  </a>
                )}
                {selectedProject.code && (
                  <a
                    href={selectedProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;