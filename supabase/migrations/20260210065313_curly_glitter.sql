/*
  # Admin Panel Database Schema

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `summary` (text)
      - `author` (text)
      - `featured_image` (text)
      - `category` (text)
      - `tags` (text array)
      - `status` (text) - draft/published
      - `featured` (boolean)
      - `seo_title` (text)
      - `seo_description` (text)
      - `seo_keywords` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `portfolio_projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `content` (text)
      - `category` (text)
      - `featured_image` (text)
      - `project_link` (text)
      - `tools` (text array)
      - `results` (text)
      - `testimonial` (text)
      - `featured` (boolean)
      - `seo_title` (text)
      - `seo_description` (text)
      - `seo_keywords` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `services`
      - `id` (uuid, primary key)
      - `name` (text)
      - `icon` (text)
      - `description` (text)
      - `importance` (text)
      - `full_description` (text)
      - `features` (text array)
      - `deliverables` (text array)
      - `timeline` (text)
      - `featured_image` (text)
      - `cta_link` (text)
      - `seo_title` (text)
      - `seo_description` (text)
      - `seo_keywords` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  summary text,
  author text DEFAULT 'Forhad Hossen',
  featured_image text,
  category text,
  tags text[] DEFAULT '{}',
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  featured boolean DEFAULT false,
  seo_title text,
  seo_description text,
  seo_keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Portfolio Projects Table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  content text,
  category text,
  featured_image text,
  project_link text,
  tools text[] DEFAULT '{}',
  results text,
  testimonial text,
  featured boolean DEFAULT false,
  seo_title text,
  seo_description text,
  seo_keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  icon text DEFAULT 'Star',
  description text NOT NULL,
  importance text,
  full_description text,
  features text[] DEFAULT '{}',
  deliverables text[] DEFAULT '{}',
  timeline text,
  featured_image text,
  cta_link text DEFAULT '/contact',
  seo_title text,
  seo_description text,
  seo_keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Policies for authenticated users (admin access)
CREATE POLICY "Admin can manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (status = 'published');

CREATE POLICY "Admin can manage portfolio projects"
  ON portfolio_projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can read portfolio projects"
  ON portfolio_projects
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin can manage services"
  ON services
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can read services"
  ON services
  FOR SELECT
  TO anon
  USING (true);

-- Update triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_portfolio_projects_updated_at BEFORE UPDATE ON portfolio_projects FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();