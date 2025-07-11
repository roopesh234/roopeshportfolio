import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'api';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and sales reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A cross-platform mobile application for project management with real-time collaboration, file sharing, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'REST API Service',
    description: 'A scalable REST API service with authentication, rate limiting, caching, and comprehensive documentation for fintech applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    category: 'api',
    technologies: ['Express.js', 'PostgreSQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'An advanced analytics platform for social media managers with sentiment analysis, engagement metrics, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    technologies: ['Vue.js', 'Python', 'Redis'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate platform with advanced search filters, virtual tours, mortgage calculators, and agent management.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    category: 'web',
    technologies: ['Next.js', 'GraphQL', 'AWS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Microservices Architecture',
    description: 'A distributed microservices system with event-driven architecture, API gateway, service discovery, and monitoring for enterprise applications.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    category: 'api',
    technologies: ['Node.js', 'Kubernetes', 'Redis'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'api', label: 'APIs' }
];

const techColors: Record<string, string> = {
  'React': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Node.js': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'MongoDB': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'React Native': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Firebase': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'Redux': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'Express.js': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'PostgreSQL': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Docker': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  'Vue.js': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Python': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'Redis': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'Next.js': 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
  'GraphQL': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
  'AWS': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  'Kubernetes': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
};

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-20 portfolio-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">My Portfolio</h2>
          <div className="w-24 h-1 portfolio-bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            Here are some of my recent projects that showcase my skills and expertise in full-stack development.
          </p>
        </motion.div>

        {/* Portfolio Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id
                  ? 'portfolio-bg-primary text-white'
                  : 'portfolio-dark-card text-gray-600 dark:text-gray-300'
              } rounded-full transition-all duration-200 font-inter`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="project-card portfolio-dark-card shadow-lg overflow-hidden group holographic-card card-3d">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-display">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 font-inter">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded ${techColors[tech] || 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          className="flex items-center text-primary hover:text-blue-700 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          className="flex items-center text-primary hover:text-blue-700 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
