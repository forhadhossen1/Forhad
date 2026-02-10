import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import { usePortfolioProjects } from '../hooks/useSupabaseData';

const Portfolio = () => {
  const { projects, loading } = usePortfolioProjects();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-500"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen relative floating-shapes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore our successful digital marketing campaigns and the measurable results 
            we've achieved for clients across various industries.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <Filter className="w-5 h-5 text-accent-500 mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 font-medium transition-all duration-300 rounded-full glass-card ${
                selectedCategory === category
                  ? 'bg-accent-500 text-white scale-105'
                  : 'glass-card-light dark:glass-card-dark text-gray-700 dark:text-gray-300 hover:bg-accent-100 hover:text-accent-600 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card glass-card-light dark:glass-card-dark overflow-hidden hover:scale-105 transition-all duration-300 rounded-xl group"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  
               <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    alert("Sorry, due to client confidentiality, this project is private.");
  }}
  className="glass-card glass-card-light px-6 py-3 font-semibold text-gray-900 hover:bg-accent-500 hover:text-white transition-all duration-300 flex items-center space-x-2 rounded-lg"
>
  <span>View Project</span>
  <ExternalLink className="w-4 h-4" />
</a>
                  
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                    {project.featured && (
                      <span className="bg-accent-500 text-white px-2 py-1 text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="bg-accent-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                {project.content && (
                  <div className="glass-card glass-card-light dark:glass-card-dark p-4 mb-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Details:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {project.content}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="glass-card glass-card-light dark:glass-card-dark text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card glass-card-light dark:glass-card-dark p-4 border-l-4 border-accent-500 mb-6 rounded-r-lg">
                  <h4 className="font-semibold text-accent-600 dark:text-accent-400 mb-2">Results:</h4>
                  <p className="text-accent-700 dark:text-accent-300">{project.results}</p>
                </div>

                {project.testimonial && (
                  <blockquote className="glass-card glass-card-light dark:glass-card-dark p-4 italic text-gray-700 dark:text-gray-300 border-l-4 border-accent-500 rounded-r-lg">
                    "{project.testimonial}"
                  </blockquote>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center glass-card glass-card-light dark:glass-card-dark p-12 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready for Similar Results?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's create a success story for your business
          </p>
          <a
            href="/contact"
            className="bg-accent-500 text-white px-8 py-4 text-lg font-semibold hover:bg-accent-600 transition-all duration-300 inline-block rounded-lg hover:scale-105"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
