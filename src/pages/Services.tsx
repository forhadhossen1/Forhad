import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services } from '../data/mockData';

const Services = () => {
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
            Digital Marketing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive digital marketing solutions designed to accelerate your business growth
            and maximize your online presence across all channels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card glass-card-light dark:glass-card-dark p-8 hover:scale-105 transition-all duration-300 rounded-xl group"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="glass-card glass-card-light dark:glass-card-dark p-4 border-l-4 border-accent-500 rounded-r-lg">
                      <p className="text-accent-600 dark:text-accent-400 font-medium">
                        Why it matters: {service.importance}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center glass-card glass-card-light dark:glass-card-dark p-12 rounded-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's discuss how these services can transform your business
          </p>
          <a
            href="/contact"
            className="bg-accent-500 text-white px-8 py-4 text-lg font-semibold hover:bg-accent-600 transition-all duration-300 inline-block rounded-lg hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;