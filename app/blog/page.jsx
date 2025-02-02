import Link from 'next/link';
import { getBlogPosts } from '../.././lib/getBlogPosts';

export const revalidate = 60;

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  blogPosts.sort((a, b) => b.id - a.id);

  return (
    <section className="section">
      <div className="container-md">
        <h1 className="heading-divider mb-10">
          Nathan&apos;s Tech Blog
        </h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Dive into articles on software engineering, AI innovations, and development best practices. Stay updated with my latest insights and projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col bg-brand-light dark:bg-brand-dark border border-neutral-200 dark:border-neutral-700 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden"
            >
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  {post.date}
                </span>
                <p className="text-base text-neutral-600 dark:text-neutral-300 flex-grow line-clamp-3">
                  {post.description}
                </p>
              </div>

              {/* Button Section */}
              <div className="p-6">
                {post.comingSoon ? (
                  <button
                    disabled
                    className="btn cursor-not-allowed bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                  >
                    Coming Soon
                  </button>
                ) : (
                  <Link href={`/blog/${post.slug}`} className="btn group-hover:bg-blue-500">
                    Read More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}