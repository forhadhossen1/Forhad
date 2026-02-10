import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, FileText, Briefcase, Settings, Plus, CreditCard as Edit, Trash2, Eye, LogOut, Users } from 'lucide-react';
import { supabase, blogAPI, portfolioAPI, servicesAPI, BlogPost, PortfolioProject, Service } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    blogPosts: 0,
    portfolioProjects: 0,
    services: 0,
    publishedPosts: 0
  });
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [blogs, portfolio, servicesData] = await Promise.all([
        blogAPI.getAll(),
        portfolioAPI.getAll(),
        servicesAPI.getAll()
      ]);

      setBlogPosts(blogs);
      setPortfolioProjects(portfolio);
      setServices(servicesData);

      setStats({
        blogPosts: blogs.length,
        portfolioProjects: portfolio.length,
        services: servicesData.length,
        publishedPosts: blogs.filter(post => post.status === 'published').length
      });
    } catch (error) {
      toast.error('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleDelete = async (type: 'blog' | 'portfolio' | 'service', id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      switch (type) {
        case 'blog':
          await blogAPI.delete(id);
          break;
        case 'portfolio':
          await portfolioAPI.delete(id);
          break;
        case 'service':
          await servicesAPI.delete(id);
          break;
      }
      toast.success('Item deleted successfully');
      fetchData();
    } catch (error) {
      toast.error('Failed to delete item');
    }
  };

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card glass-card-light dark:glass-card-dark p-6 rounded-xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Blog Posts"
          value={stats.blogPosts}
          icon={FileText}
          color="bg-blue-500"
        />
        <StatCard
          title="Published Posts"
          value={stats.publishedPosts}
          icon={Eye}
          color="bg-green-500"
        />
        <StatCard
          title="Portfolio Projects"
          value={stats.portfolioProjects}
          icon={Briefcase}
          color="bg-purple-500"
        />
        <StatCard
          title="Services"
          value={stats.services}
          icon={Settings}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card glass-card-light dark:glass-card-dark p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Blog Posts
          </h3>
          <div className="space-y-3">
            {blogPosts.slice(0, 5).map((post) => (
              <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{post.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.status} • {new Date(post.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  post.status === 'published' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card glass-card-light dark:glass-card-dark p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Portfolio Projects
          </h3>
          <div className="space-y-3">
            {portfolioProjects.slice(0, 5).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{project.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.category} • {new Date(project.created_at).toLocaleDateString()}
                  </p>
                </div>
                {project.featured && (
                  <span className="px-2 py-1 text-xs rounded-full bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200">
                    Featured
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBlogManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Blog Posts</h2>
        <button
          onClick={() => navigate('/admin/blog/new')}
          className="bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Post</span>
        </button>
      </div>

      <div className="glass-card glass-card-light dark:glass-card-dark rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {blogPosts.map((post) => (
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {post.category}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'published' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                        className="text-accent-600 hover:text-accent-900 dark:text-accent-400 dark:hover:text-accent-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete('blog', post.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'blog', label: 'Blog Posts', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Settings },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
          </div>
          <nav className="mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-accent-50 dark:bg-accent-900 text-accent-600 dark:text-accent-400 border-r-2 border-accent-500'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-3" />
                {tab.label}
              </button>
            ))}
            <button
              onClick={handleSignOut}
              className="w-full flex items-center px-6 py-3 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors mt-8"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign Out
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'blog' && renderBlogManagement()}
          {/* Add other tab content here */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;