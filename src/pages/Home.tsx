import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { testimonials, certifications } from '../data/mockData';
import { useServices, usePortfolioProjects } from '../hooks/useSupabaseData';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { services, loading: servicesLoading } = useServices();
  const { projects, loading: projectsLoading } = usePortfolioProjects();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  if (servicesLoading || projectsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative floating-shapes">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I’m Forhad — A Digital 
            <span className="block text-gray-600 dark:text-gray-300">Marketing        Specialist</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            I specialize in helping businesses grow through strategic, data-driven digital                 marketing that delivers measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-accent-500 text-white px-8 py-4 text-lg font-semibold hover:bg-accent-600 transition-all duration-300 flex items-center justify-center space-x-2 rounded-lg glass-card hover:scale-105"
            >
              
              <span>Hire Me</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="glass-card glass-card-light dark:glass-card-dark text-gray-900 dark:text-white px-8 py-4 text-lg font-semibold hover:bg-accent-500 hover:text-white transition-all duration-300 rounded-lg hover:scale-105"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 scroll-indicator glass-card glass-card-light dark:glass-card-dark p-3 rounded-full hover:scale-110 transition-all duration-300"
        >
          <ChevronDown className="w-8 h-8 text-accent-500" />
        </button>
      </section>

      {/* Services Summary */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Services That Drive Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Star;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card glass-card-light dark:glass-card-dark p-8 text-center hover:scale-105 transition-all duration-300 rounded-xl group"
                >
                  <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-accent-500 font-semibold hover:text-accent-600 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Recent projects that exemplify expertise and deliver impactful results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-card glass-card-light dark:glass-card-dark overflow-hidden hover:scale-105 transition-all duration-300 rounded-xl group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="glass-card glass-card-light dark:glass-card-dark text-gray-700 dark:text-gray-300 px-3 py-1 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="text-accent-500 font-semibold mb-4">
                    {project.results}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 text-accent-500 font-semibold hover:text-accent-600 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Client Success Stories
          </h2>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-light dark:glass-card-dark p-8 md:p-12 rounded-xl"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-accent-500"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-accent-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-accent-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certified Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Industry-recognized certifications and credentials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card glass-card-light dark:glass-card-dark p-8 text-center hover:scale-105 transition-all duration-300 rounded-xl group"
              >
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-16 h-16 mx-auto mb-4 object-cover rounded-full ring-2 ring-accent-500 group-hover:ring-accent-600 transition-colors"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-accent-500 font-medium">
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;