import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="mr-4">By {post.author}</span>
              <span className="mr-4">•</span>
              <span className="mr-4">{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span className="mr-4">•</span>
              <span className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 text-xs font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {post.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 text-sm flex items-center space-x-1"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover mb-12 shadow-lg"
          />

          {/* SEO Meta Information */}
          <div className="glass-card glass-card-light dark:glass-card-dark p-4 mb-8 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Article Summary
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {post.seo?.metaDescription || post.summary}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {post.content}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Key Takeaways
            </h2>

            <ul className="text-gray-600 dark:text-gray-300 mb-8">
              {post.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="mb-2">{takeaway}</li>
              ))}
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 border-l-4 border-gray-900 dark:border-white">
              <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                "Success in digital marketing isn't just about following trends—it's about 
                understanding your audience and creating authentic connections that drive 
                meaningful business results."
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Implement These Strategies?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how these insights can be applied to your specific business goals.
            </p>
            <Link
              to="/contact"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;