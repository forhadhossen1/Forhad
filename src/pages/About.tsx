import React from 'react';
import { motion } from 'framer-motion';
import { Award, Mail, Phone } from 'lucide-react';
import { skills, certifications } from '../data/mockData';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Passionate digital marketing strategist with over 2 years of experience helping 
            businesses achieve extraordinary growth through data-driven marketing solutions.
          </motion.p>
        </div>

        {/* Personal Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.ibb.co.com/xtvcVRTt/Website-imge.png"
              alt="Professional photo"
              className="w-full h-full "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Forhad Hossen
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        I’m a results-driven digital marketing strategist passionate about helping businesses grow through data-backed and creative solutions. I specialize in crafting comprehensive marketing strategies that connect brands with the right audience — at the right time, through the right channels. My journey started with traditional marketing knowledge, but I soon embraced the digital space after discovering the power of analytics and performance-driven campaigns. Since then, I’ve worked with numerous businesses — from startups to established brands — to boost their visibility, generate quality leads, and drive measurable revenue growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
  Whether it’s through SEO, paid ads, social media, or conversion-focused funnels — I bring both creative insight and analytical precision to every campaign I manage. Let’s build strategies that not only attract — but convert and retain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-4 flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-gray-900 dark:bg-white"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* soft skill  */}
        {/* Supporting Technical Skills */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-20"
>
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
    Additional Technical Skills
  </h2>
    <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
    Supportive & Complementary Skills that Strengthen My Marketing Execution
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">MERN Stack Development</h3>
      <p className="text-gray-700 dark:text-gray-300">
        I use my knowledge of MongoDB, Express.js, React, and Node.js to build responsive landing pages, 
        optimize site speed, and enhance marketing funnel performance.
      </p>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Graphic & Visual Design</h3>
      <p className="text-gray-700 dark:text-gray-300">
        I create compelling visuals, ad creatives, and brand assets using tools like Adobe Illustrator, Photoshop, 
        and Figma — ensuring every campaign is both impactful and on-brand.
      </p>
    </div>
  </div>
</motion.div>


        {/* Work Philosophy */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mb-20"
>
  <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
    How I Think
  </h2>

  <div className="relative max-w-6xl mx-auto px-4">
    {/* Vertical line - only visible on md and above */}
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-500"></div>

    {/* Timeline items */}
    <div className="space-y-16">
      {/* 1 - Left on desktop, full on mobile */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2 md:pr-12 text-right md:text-right text-left">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Observation First
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            I start by observing. I listen more than I speak. I notice patterns, pain points, and potential.
          </p>
        </div>
        {/* Dot - hidden on mobile */}
        <div className="hidden md:block w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
        <div className="md:w-1/2"></div>
      </div>

      {/* 2 - Right on desktop */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2"></div>
        <div className="hidden md:block w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
        <div className="md:w-1/2 md:pl-12 text-left">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Strategy Comes Next
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Then I build strategies—simple, focused, and backed by data. Everything must have a purpose.
          </p>
        </div>
      </div>

      {/* 3 - Left */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2 md:pr-12 text-right md:text-right text-left">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Action with Intent
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            I execute with clarity and consistency. Every move is intentional, every campaign is measurable.
          </p>
        </div>
        <div className="hidden md:block w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
        <div className="md:w-1/2"></div>
      </div>

      {/* 4 - Right */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2"></div>
        <div className="hidden md:block w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 absolute left-1/2 transform -translate-x-1/2"></div>
        <div className="md:w-1/2 md:pl-12 text-left">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Reflect & Refine
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            I believe in iteration. I reflect, learn, and improve—because growth never stops.
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-gray-100 dark:bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {cert.issuer}
                </p>
           
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Beyond Marketing</h2>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            When I'm not crafting marketing strategies, you'll find me exploring new technologies, 
            hiking mountain trails, or experimenting with photography. I believe that diverse 
            experiences fuel creativity and bring fresh perspectives to my work.
          </p>
          <p className="text-xl font-semibold">
            Ready to work together? Let's create something amazing.
          </p>
          <a
            href="/contact"
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-block mt-6"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;