const fs = require('fs');
const matter = require('gray-matter');
const { join } = require('path');

// Define the posts directory
const postsDirectory = join(process.cwd(), '/src/app/blog/_posts');

// Function to get post slugs (filenames)
function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// Function to get a single post by its slug
function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, ''); // Remove .md extension
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8'); // Read markdown file
  const { data, content } = matter(fileContents); // Parse frontmatter and content

  return { ...data, slug: realSlug, content }; // Return post data
}

// Function to get all posts, sorted by date
function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)); // Sort by date
  return posts;
}

module.exports = {
  getPostSlugs,
  getPostBySlug,
  getAllPosts,
};
