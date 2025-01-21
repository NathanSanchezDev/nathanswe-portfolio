import { getBlogPosts } from '../../../lib/getBlogPosts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
        return {};
    }

    return {
        title: post.title,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }) {
    const blogPosts = await getBlogPosts();
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return notFound();
    }

    const suggestedBlogs = blogPosts.filter((p) => p.slug !== post.slug);

    return (
        <div className="min-h-screen flex flex-col items-center p-8">
            <div className="relative max-w-4xl w-full flex flex-col md:flex-row">
                {/* Blog Content */}
                <div className="md:w-3/4">
                    <h1
                        className="text-5xl font-extrabold mb-8 text-white 
                       text-center md:text-left border-b-2 
                       border-gray-700 pb-4"
                    >
                        {post.title}
                    </h1>

                    {post.comingSoon ? (
                        <p className="text-gray-300 text-xl text-center mt-8">
                            This blog post is coming soon.
                        </p>
                    ) : (
                        <article className="prose prose-lg prose-invert">
                            {post.content.sections.map((section, index) => {
                                switch (section.type) {
                                    case 'paragraph':
                                        return (
                                            <p
                                                key={index}
                                                className="text-gray-300 leading-relaxed mb-6"
                                                dangerouslySetInnerHTML={{
                                                    __html: section.text || '',
                                                }}
                                            />
                                        );

                                    case 'heading':
                                        if (section.level === 2) {
                                            return (
                                                <h2
                                                    key={index}
                                                    className="text-4xl font-bold text-white mt-8 mb-4"
                                                >
                                                    {section.text}
                                                </h2>
                                            );
                                        } else {
                                            return (
                                                <h3
                                                    key={index}
                                                    className="text-3xl font-bold text-white mt-8 mb-4"
                                                >
                                                    {section.text}
                                                </h3>
                                            );
                                        }

                                    case 'list':
                                        return (
                                            <ul
                                                key={index}
                                                className="list-disc ml-6 text-gray-300 
                                   leading-relaxed mb-6"
                                            >
                                                {(section.items || []).map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        dangerouslySetInnerHTML={{ __html: item.text }}
                                                    />
                                                ))}
                                            </ul>
                                        );

                                    default:
                                        return null;
                                }
                            })}
                        </article>
                    )}
                </div>

                {/* Suggested Posts on the Right */}
                {suggestedBlogs.length > 0 && (
                    <div className="md:w-1/4 md:ml-8 sticky top-4 hidden md:block">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Other Blog Posts
                        </h2>
                        <div className="space-y-4">
                            {suggestedBlogs.slice(0, 2).map((suggestedPost) => (
                                <Link href={`/blog/${suggestedPost.slug}`} key={suggestedPost.slug}>
                                    <div
                                        className="bg-gray-800 p-4 rounded-lg shadow-lg
                               hover:shadow-xl transition-shadow
                               cursor-pointer"
                                    >
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {suggestedPost.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {suggestedPost.description}
                                        </p>
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
                    <button
                        className="px-4 py-2 bg-blue-600 text-white 
                       rounded-lg shadow-md hover:bg-blue-500 transition"
                    >
                        ← Back to Blogs
                    </button>
                </Link>
            </div>
        </div>
    );
}