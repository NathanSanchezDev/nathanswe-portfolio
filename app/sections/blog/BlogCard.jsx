import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";

export default function BlogCard({ blog, index }) {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true });

    return (
        <article
            ref={cardRef}
            className="rounded-lg shadow-md bg-card-light dark:bg-card-dark p-6 flex flex-col"
            style={{
                transform: isInView ? "none" : `translateY(${100 + index * 50}px)`,
                opacity: isInView ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 100}ms`,
            }}
        >
            <header>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p>{blog.date}</p>
            </header>
            <div className="flex-grow my-4">
                <p className="line-clamp-3">{blog.description}</p>
            </div>
            <footer>
                <Link href={`/blog/${blog.slug}`} className="text-blue-500 hover:underline mt-auto">
                    Read More →
                </Link>
            </footer>
        </article>
    );
}