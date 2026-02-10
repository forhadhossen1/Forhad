import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      // Send form data using EmailJS
      await emailjs.send(
        'service_fm2cf2q', // Your Service ID
        'template_jjgn4dg', // Your Template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'cA-OHY2k7TyIcezln' // Your Public Key
      );
      alert('Thank you for your message! I\'ll get back to you soon.');
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send your message. Please try again later.');
    }
  };

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
            Let's Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Ready to transform your digital presence? I'd love to hear about your project 
            and discuss how we can achieve your business goals together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card glass-card-light dark:glass-card-dark p-8 rounded-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Send a Message
            </h2>
            
<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Your Name *
    </label>
    <input
      {...register('name', { required: 'Name is required' })}
      type="text"
      id="name"
      name="name" // Changed from "from_name" to match register key
      className="w-full px-4 py-3 glass-card glass-card-light dark:glass-card-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all duration-300 rounded-lg"
      placeholder="Enter your full name"
    />
    {errors.name && (
      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
    )}
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Email Address *
    </label>
    <input
      {...register('email', { 
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      })}
      type="email"
      id="email"
      name="email" // Changed from "from_email" to match register key
      className="w-full px-4 py-3 glass-card glass-card-light dark:glass-card-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all duration-300 rounded-lg"
      placeholder="Enter your email address"
    />
    {errors.email && (
      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
    )}
  </div>

  <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Subject *
    </label>
    <input
      {...register('subject', { required: 'Subject is required' })}
      type="text"
      id="subject"
      name="subject"
      className="w-full px-4 py-3 glass-card glass-card-light dark:glass-card-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all duration-300 rounded-lg"
      placeholder="What's this about?"
    />
    {errors.subject && (
      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
    )}
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Message *
    </label>
    <textarea
      {...register('message', { required: 'Message is required' })}
      id="message"
      name="message"
      rows={6}
      className="w-full px-4 py-3 glass-card glass-card-light dark:glass-card-dark text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all duration-300 resize-vertical rounded-lg"
      placeholder="Tell me about your project, goals, and how I can help..."
    ></textarea>
    {errors.message && (
      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
    )}
  </div>

  <button
    type="submit"
    className="w-full bg-accent-500 text-white px-8 py-4 text-lg font-semibold hover:bg-accent-600 transition-all duration-300 flex items-center justify-center space-x-2 rounded-lg hover:scale-105"
  >
    <Send className="w-5 h-5" />
    <span>Send Message</span>
  </button>
</form>

            
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 glass-card glass-card-light dark:glass-card-dark p-8 rounded-xl"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm always excited to discuss new projects and opportunities. 
                Whether you need a complete digital marketing strategy or specific 
                campaign optimization, let's start a conversation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-500 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">forhadhossen.marketer@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-500 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">+8801306181767</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Bangladesh</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Open to remote work worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card glass-card-light dark:glass-card-dark p-8 mt-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ready to Grow Your Business?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Don't let your competitors get ahead. Let's create a digital marketing 
                strategy that drives real results for your business.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            About Marketing
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
            Marketing isn’t just about selling products — it’s about telling stories that resonate, solving real problems, and building long-term trust.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
            It’s the silent engine behind every great brand, the creative bridge between a solution and the people who need it.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
            In today’s digital world, effective marketing blends strategy, psychology, creativity, and data.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
            From the first impression to the final conversion, every touchpoint matters.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-semibold italic text-center">
            But let’s be honest...
          </p>
          <p className="text-lg text-gray-900 dark:text-white font-semibold text-center">
            Marketing is the only job where you can say “Let’s run a test,” and if it fails, you call it “learning.” <span className="text-yellow-400">😄</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;