import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { getAllPosts } from '@/app/blog/lib/api'; // Import getAllPosts from the actual blog API

// Base URL of your site
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://dev.kido.do';
const BLOG_URL = process.env.NEXT_PUBLIC_CAPITALM_BLOG_URL || BASE_URL + '/blog';
const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || 'https://docs.kido.do';

// Paths or URLs to be manually excluded from the sitemap
const EXCLUDED_PATHS = [
  '/terms/outdated',
  '/page.tsx',
  '/signals',
  '/broker',
  '/tv',
  '/signin',
  '/b2b',
  'auth/error',
  'auth/signin',
  'test'
];

// Fetch dynamic blog posts from your CMS or data source
async function getBlogPosts(): Promise<MetadataRoute.Sitemap> {
  // Fetch all posts dynamically from your data source
  const posts = await getAllPosts();

  return posts.map(post => ({
    url: `${BLOG_URL}/${post.slug}`,
    lastModified: new Date((post as any).date || Date.now()),  // Adjust based on post modification dates if available
    priority: 0.8,
    changeFrequency: 'weekly',
  }));
}

// Recursively find all routable pages and MDX files in the app directory
function getRoutablePages(dir: string, routes: MetadataRoute.Sitemap = []): MetadataRoute.Sitemap {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getRoutablePages(fullPath, routes); // Recurse into subdirectories
    } else if ((file === 'page.tsx' || file.endsWith('.mdx')) && !fullPath.includes('[slug]')) { // Include page.tsx and MDX files, exclude unwanted paths
      let relativePath = path.relative(path.join(process.cwd(), 'src/app'), fullPath);
      relativePath = relativePath.replace(/\\/g, '/').replace('/page.tsx', '').replace('/page.mdx', '');
      
      // Remove folder-level with brackets () from the route
      const route = relativePath.split('/').filter(segment => !segment.startsWith('(') && !segment.endsWith(')')).join('/');
      
      // Exclude dynamic routes (with []) and manually excluded paths
      if (!route.includes('[') && !EXCLUDED_PATHS.includes(`/${route}`)) {
        routes.push({
          url: `${BASE_URL}${route === '' ? '/' : `/${route}`}`, // Handle root index case
          lastModified: new Date(),
          priority: route === '' ? 1.0 : 0.8, // Assign higher priority to landing page
          changeFrequency: 'monthly',
        });
      }
    }
  });

  return routes;
}

// Fetch all routable pages and MDX routes
async function getPagesAndMDXRoutes(): Promise<MetadataRoute.Sitemap> {
  return getRoutablePages(path.join(process.cwd(), 'src/app'));
}

// Combine static and dynamic routes into the sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes (e.g., landing page, about page)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },  // Landing page
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },
    // Add more static routes here as needed
  ];

  // Fetch dynamic blog posts
  const blogPosts = await getBlogPosts();
  
  // Fetch all routable pages and MDX files in the app directory
  const pagesAndMDXRoutes = await getPagesAndMDXRoutes();

  const additionalSitemaps = [
    { url: `${DOCS_URL}/sitemap.xml`, lastModified: new Date() }
  ];  

  // Combine static routes, blog posts, and dynamically detected pages
  return [...staticRoutes, ...blogPosts, ...pagesAndMDXRoutes, ...additionalSitemaps];
}