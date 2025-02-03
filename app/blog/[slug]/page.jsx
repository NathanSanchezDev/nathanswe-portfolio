import { getBlogPosts } from "../../../lib/getBlogPosts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const blogPosts = await getBlogPosts();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Not Found | Nathan Sanchez",
      description: "The requested blog post could not be found.",
      openGraph: {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
        url: `https://nathanswe.com/blog/${params.slug}`,
      },
      twitter: {
        title: "Blog Not Found",
        description: "The requested blog post could not be found.",
      },
    };
  }

  const publishedTime = post.date ? new Date(post.date).toISOString() : undefined;

  return {
    title: `${post.title} | Nathan Sanchez`,
    description: post.description,
    keywords: [post.title, "blog", "software engineering", "Nathan Sanchez"],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://nathanswe.com/blog/${post.slug}`,
      images: post.image
        ? [
            {
              url: `https://nathanswe.com${post.image}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      image: post.image ? `https://nathanswe.com${post.image}` : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const blogPosts = await getBlogPosts();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const suggestedBlogs = blogPosts.filter((p) => p.slug !== post.slug);

  // Social Media Share URLs
  const twitterShareUrl = `https://twitter.com/share?text=${encodeURIComponent(
    post.title
  )}&url=https://nathanswe.com/blog/${post.slug}&via=nathanxdev`;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=https://nathanswe.com/blog/${post.slug}&title=${encodeURIComponent(
    post.title
  )}&summary=${encodeURIComponent(post.description)}`;

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">
      <div className="relative max-w-4xl w-full flex flex-col md:flex-row">
        {/* Blog Content */}
        <div className="md:w-3/4">
          <h1 className="text-5xl font-extrabold mb-2 text-center md:text-left border-b-2 pb-4">
            {post.title}
          </h1>
          <div className="mb-6 text-center md:text-left">
            {post.date && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Published on {new Date(post.date).toLocaleDateString()}
              </p>
            )}
            {post.author && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                By {post.author}
              </p>
            )}
          </div>

          {post.comingSoon ? (
            <p className="text-xl text-center mt-8">
              This blog post is coming soon.
            </p>
          ) : (
            <article className="prose prose-lg prose-invert">
              {post.content.sections.map((section, index) => {
                switch (section.type) {
                  case "paragraph":
                    return (
                      <ReactMarkdown
                        key={index}
                        className="leading-relaxed mb-6"
                      >
                        {section.text || ""}
                      </ReactMarkdown>
                    );
                  case "heading":
                    return section.level === 2 ? (
                      <h2 key={index} className="text-4xl font-bold mt-8 mb-4">
                        {section.text}
                      </h2>
                    ) : (
                      <h3 key={index} className="text-3xl font-bold mt-8 mb-4">
                        {section.text}
                      </h3>
                    );
                  case "list":
                    return (
                      <ul
                        key={index}
                        className="list-disc ml-6 leading-relaxed mb-6"
                      >
                        {(section.items || []).map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <ReactMarkdown>{item.text}</ReactMarkdown>
                          </li>
                        ))}
                      </ul>
                    );
                  case "code":
                    return (
                      <pre
                        key={index}
                        className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-6"
                      >
                        <code className="whitespace-pre-wrap">
                          {section.text}
                        </code>
                      </pre>
                    );
                  default:
                    return null;
                }
              })}
            </article>
          )}

          {/* Social Share Buttons */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Share this post:</h3>
            <div className="flex space-x-4">
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400"
              >
                Share on Twitter
              </a>
              <a
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-600"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Suggested Posts on the Right */}
        {suggestedBlogs.length > 0 && (
          <div className="md:w-1/4 md:ml-8 sticky top-4 hidden md:block">
            <h2 className="text-3xl font-bold mb-4">Other Blog Posts</h2>
            <div className="space-y-4">
              {suggestedBlogs.slice(0, 2).map((suggestedPost) => (
                <Link
                  href={`/blog/${suggestedPost.slug}`}
                  key={suggestedPost.slug}
                >
                  <div className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <h3 className="text-xl font-semibold mb-2">
                      {suggestedPost.title}
                    </h3>
                    <p>{suggestedPost.description}</p>
                    <span className="text-blue-500 hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Back Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="/blog">
          <button className="btn px-4 py-2">← Back to Blogs</button>
        </Link>
      </div>
    </div>
  );
}