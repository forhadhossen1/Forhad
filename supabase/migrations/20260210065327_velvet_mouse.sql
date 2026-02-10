/*
  # Seed Initial Data

  1. Insert existing services data
  2. Insert sample blog posts
  3. Insert sample portfolio projects
*/

-- Insert Services
INSERT INTO services (name, icon, description, importance, full_description, features, deliverables, timeline, seo_title, seo_description, seo_keywords) VALUES
('SEO Optimization', 'Search', 'Improve your website''s visibility in search engines with proven SEO strategies.', 'Essential for organic traffic growth and long-term online presence.', 'Our comprehensive SEO optimization service includes keyword research, on-page optimization, technical SEO audits, content optimization, and link building strategies. We focus on improving your website''s search engine rankings through white-hat techniques that deliver sustainable results.', 
ARRAY['Keyword Research & Analysis', 'On-Page Optimization', 'Technical SEO Audit', 'Content Strategy', 'Link Building', 'Local SEO', 'Performance Monitoring'], 
ARRAY['SEO Strategy Document', 'Monthly Performance Reports', 'Keyword Rankings Tracking', 'Technical Audit Report'], 
'3-6 months for significant results',
'SEO Optimization Services | Improve Search Rankings',
'Professional SEO optimization services to improve your website visibility and search engine rankings with proven strategies.',
'SEO, search engine optimization, keyword research, on-page SEO, technical SEO'),

('PPC Advertising', 'MousePointer', 'Drive targeted traffic with strategic pay-per-click campaigns.', 'Immediate results and precise audience targeting for quick ROI.', 'Our PPC advertising service covers Google Ads, Microsoft Ads, and social media advertising platforms. We create data-driven campaigns that maximize your return on investment through strategic keyword targeting, compelling ad copy, and optimized landing pages.',
ARRAY['Campaign Strategy & Setup', 'Keyword Research', 'Ad Copy Creation', 'Landing Page Optimization', 'Bid Management', 'A/B Testing', 'Performance Analytics'],
ARRAY['Campaign Setup', 'Weekly Performance Reports', 'Monthly Strategy Reviews', 'ROI Analysis'],
'Immediate results, ongoing optimization',
'PPC Advertising Services | Google Ads Management',
'Expert PPC advertising services for Google Ads and social media platforms. Maximize ROI with strategic campaign management.',
'PPC, Google Ads, pay per click, advertising, campaign management'),

('Social Media Marketing', 'Share2', 'Build brand awareness and engage your audience across social platforms.', 'Builds community and drives brand loyalty through authentic engagement.', 'Our social media marketing service helps you build a strong presence across all major platforms including Facebook, Instagram, Twitter, LinkedIn, and TikTok. We create engaging content, manage your community, and run targeted social media advertising campaigns.',
ARRAY['Content Strategy & Creation', 'Community Management', 'Social Media Advertising', 'Influencer Partnerships', 'Analytics & Reporting', 'Brand Voice Development'],
ARRAY['Content Calendar', 'Monthly Content Creation', 'Community Management', 'Performance Reports'],
'2-4 weeks for setup, ongoing management',
'Social Media Marketing Services | Brand Growth',
'Professional social media marketing services to build brand awareness and engage your audience across all platforms.',
'social media marketing, Facebook marketing, Instagram marketing, content creation'),

('Google Analytics 4 & Conversion Tracking', 'BarChart3', 'Advanced analytics setup and conversion tracking to measure and optimize your marketing performance.', 'Essential for data-driven decision making and measuring true ROI of marketing efforts.', 'Our Google Analytics 4 and conversion tracking service provides comprehensive measurement and analytics solutions for your digital marketing efforts. We set up advanced tracking, create custom dashboards, and provide actionable insights to help you understand your audience behavior and optimize your marketing campaigns for better results.',
ARRAY['GA4 Setup & Configuration', 'Enhanced Ecommerce Tracking', 'Custom Event Tracking', 'Goal & Conversion Setup', 'Custom Dashboards', 'Audience Segmentation', 'Attribution Modeling', 'Data Studio Reports'],
ARRAY['GA4 Account Setup', 'Conversion Tracking Implementation', 'Custom Dashboard Creation', 'Monthly Analytics Reports', 'Performance Insights & Recommendations'],
'1-2 weeks for setup, ongoing monitoring and reporting',
'Google Analytics 4 Setup | Conversion Tracking Services',
'Professional GA4 setup and conversion tracking services. Measure and optimize your marketing performance with advanced analytics.',
'Google Analytics 4, GA4, conversion tracking, analytics setup, marketing measurement');

-- Insert Sample Blog Posts
INSERT INTO blog_posts (title, content, summary, category, tags, status, featured, seo_title, seo_description, seo_keywords, featured_image) VALUES
('The Psychology Behind Successful Digital Campaigns', 'In the fast-paced world of digital marketing, understanding the psychology behind consumer behavior is the key to crafting campaigns that not only capture attention but also drive action...', 'Explore the psychological principles that drive effective digital campaigns, including consumer behavior, emotional triggers, and persuasive design.', 'Digital Marketing', ARRAY['Psychology', 'Digital Campaigns', 'Consumer Behavior'], 'published', true, 'The Psychology Behind Successful Digital Marketing Campaigns', 'Discover the psychological principles that drive successful digital campaigns. Learn about consumer behavior, emotional triggers, and persuasive design strategies.', 'digital marketing psychology, consumer behavior, emotional triggers, persuasive design', 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg'),

('How to Build a High-Converting Sales Funnel in 2025', 'In 2025, building a high-converting sales funnel is more critical than ever as competition in the digital space intensifies...', 'Learn step-by-step strategies to create a sales funnel that converts visitors into loyal customers using the latest tools and trends for 2025.', 'Sales Funnels', ARRAY['Sales Funnel', 'Conversion Optimization', 'Digital Marketing'], 'published', false, 'How to Build High-Converting Sales Funnels in 2025', 'Master the art of building high-converting sales funnels in 2025. Learn step-by-step strategies, tools, and optimization techniques.', 'sales funnel, conversion optimization, lead generation, digital marketing 2025', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg');

-- Insert Sample Portfolio Projects
INSERT INTO portfolio_projects (title, description, content, category, tools, results, testimonial, featured, seo_title, seo_description, seo_keywords, featured_image) VALUES
('Result-Driven Google Ads Campaign', 'Strategic Google Search and Display Ads campaign targeting high-converting audiences with data-driven optimization.', 'This comprehensive Google Ads campaign was designed to maximize ROI through strategic keyword targeting and audience segmentation...', 'PPC', ARRAY['Google Ads', 'Google Analytics', 'Keyword Planner', 'A/B Testing Tools'], '81,900+ impressions, 1,640+ clicks, 146 conversions with 81.1% optimization score', 'Within two weeks, the campaign delivered significant ROI improvements and higher audience engagement.', true, 'Google Ads Campaign Case Study - 146 Conversions Generated', 'Discover how our strategic Google Ads campaign generated 146 conversions with 81.1% optimization score and 1,640+ clicks.', 'Google Ads, PPC campaign, conversion optimization, digital marketing case study', 'https://i.ibb.co.com/B2qCLSfg/Search-Display.png'),

('YouTube Video Ads Campaign for Brand Awareness', 'YouTube Skippable In-Stream Video Ads targeting interest-based and custom audiences to boost brand visibility.', 'This YouTube advertising campaign focused on building brand awareness through engaging video content and precise audience targeting...', 'Video Advertising', ARRAY['YouTube Ads', 'Google Analytics', 'Audience Insights', 'Video Editing Software'], '102,000+ impressions, 11,700+ video views, 11.5% view rate', 'Achieved strong brand visibility with a high view rate and optimized cost per view.', true, 'YouTube Ads Campaign - 102K Impressions & 11.5% View Rate', 'Explore our successful YouTube advertising campaign that achieved 102,000+ impressions and 11.5% view rate.', 'YouTube ads, video advertising, brand awareness, digital marketing campaign', 'https://i.ibb.co.com/TqpXdkNh/Youtube-video.png');