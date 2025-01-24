import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection } from "app/sections";
import { LatestBlogs } from "app/sections/blog";
import { getBlogPosts } from "lib/getBlogPosts";

export default async function Page() {
	const blogPosts = await getBlogPosts();
	const latestBlogs = blogPosts?.slice(0, 3) || [];

	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<LatestBlogs blogs={latestBlogs} /> {/* Pass blogs as props */}
			<TechnologiesSection />
		</div>
	);
}