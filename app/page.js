import {
	WelcomeSection,
	AboutSection,
	TechnologiesSection,
	ProjectsSection,
  } from "app/sections";
  import { LatestBlogs } from "app/sections/blog";
  import { getBlogPosts } from "lib/getBlogPosts";
  
  export default async function Page() {
	const blogPosts = await getBlogPosts();
  
	const sortedBlogPosts = blogPosts
	  ? [...blogPosts].sort((a, b) => Number(b.id) - Number(a.id))
	  : [];
  
	const latestBlogs = sortedBlogPosts.slice(0, 3);
  
	return (
	  <div className="container-md">
		<WelcomeSection />
		<AboutSection />
		<ProjectsSection />
		<LatestBlogs blogs={latestBlogs} />
		<TechnologiesSection />
	  </div>
	);
  }  