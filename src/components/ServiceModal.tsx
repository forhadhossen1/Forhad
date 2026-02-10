import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, Clock, Target } from 'lucide-react';
import * as Icons from 'lucide-react';

interface Service {
  id: number;
  icon: string;
  name: string;
  description: string;
  importance: string;
  fullDescription: string;
  features: string[];
  deliverables: string[];
  timeline: string;
}

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen) return null;

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-card glass-card-light dark:glass-card-dark rounded-xl"
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {service.name}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  {service.description}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Why it matters */}
          <div className="glass-card glass-card-light dark:glass-card-dark p-4 border-l-4 border-accent-500 rounded-r-lg mb-8">
            <p className="text-accent-600 dark:text-accent-400 font-medium">
              <strong>Why it matters:</strong> {service.importance}
            </p>
          </div>

          {/* Full Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Service Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Features & Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-accent-500" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-accent-500" />
                Timeline & Deliverables
              </h3>
              <div className="glass-card glass-card-light dark:glass-card-dark p-4 rounded-lg mb-4">
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                  Expected Timeline:
                </p>
                <p className="text-gray-600 dark:text-gray-300">{service.timeline}</p>
              </div>
              <ul className="space-y-2">
                {service.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card glass-card-light dark:glass-card-dark p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how this service can help achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-accent-500 text-white px-6 py-3 font-semibold hover:bg-accent-600 transition-all duration-300 rounded-lg hover:scale-105"
              >
                Get a Quote
              </a>
              <button
                onClick={onClose}
                className="glass-card glass-card-light dark:glass-card-dark text-gray-900 dark:text-white px-6 py-3 font-semibold hover:bg-accent-500 hover:text-white transition-all duration-300 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceModal;