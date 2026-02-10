import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  summary?: string;
  author: string;
  featured_image?: string;
  category?: string;
  tags: string[];
  status: 'draft' | 'published';
  featured: boolean;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  created_at: string;
  updated_at: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  content?: string;
  category?: string;
  featured_image?: string;
  project_link?: string;
  tools: string[];
  results?: string;
  testimonial?: string;
  featured: boolean;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  importance?: string;
  full_description?: string;
  features: string[];
  deliverables: string[];
  timeline?: string;
  featured_image?: string;
  cta_link: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  created_at: string;
  updated_at: string;
}

// API functions
export const blogAPI = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as BlogPost[];
  },

  getPublished: async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as BlogPost[];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as BlogPost;
  },

  create: async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()
      .single();
    if (error) throw error;
    return data as BlogPost;
  },

  update: async (id: string, post: Partial<BlogPost>) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(post)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as BlogPost;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};

export const portfolioAPI = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as PortfolioProject[];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as PortfolioProject;
  },

  create: async (project: Omit<PortfolioProject, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .insert(project)
      .select()
      .single();
    if (error) throw error;
    return data as PortfolioProject;
  },

  update: async (id: string, project: Partial<PortfolioProject>) => {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .update(project)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as PortfolioProject;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('portfolio_projects')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};

export const servicesAPI = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data as Service[];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Service;
  },

  create: async (service: Omit<Service, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('services')
      .insert(service)
      .select()
      .single();
    if (error) throw error;
    return data as Service;
  },

  update: async (id: string, service: Partial<Service>) => {
    const { data, error } = await supabase
      .from('services')
      .update(service)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as Service;
  },

  delete: async (id: string) => {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};