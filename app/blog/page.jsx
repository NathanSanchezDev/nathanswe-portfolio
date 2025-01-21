import Link from 'next/link';
import { getBlogPosts } from '../.././lib/getBlogPosts';

export const revalidate = 60;

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-5xl font-extrabold mb-10 text-white">
        Nathan's Tech Blog
      </h1>

      <p className="mb-12 text-lg text-center text-gray-300 max-w-3xl">
        Dive into articles on software engineering, AI innovations,
        and development best practices. Stay updated with my latest
        insights and projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300
                       rounded-xl overflow-hidden border border-gray-700 flex flex-col"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <div className="flex items-center space-x-2 mb-4 text-gray-500">
                <span>{post.date}</span>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <p className="text-gray-400 mb-4">{post.description}</p>
            </div>
            <div className="p-6">
              {post.comingSoon ? (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-700 text-gray-500
                             rounded-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="px-4 py-2 bg-blue-600 text-white
                             rounded-lg hover:bg-blue-500 transition"
                >
                  Read More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}