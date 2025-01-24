"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import Link from "next/link";
import { HeadingDivider } from "components";
import BlogCard from "./BlogCard";

export function LatestBlogs({ blogs }) {
    return (
        <LazyMotion features={domAnimation}>
            <section id="blog" className="section">
                <HeadingDivider title="Latest Blogs" />
                <div className="h-10 md:h-14" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog} index={index} />
                    ))}
                </div>

                <div className="mt-8 flex justify-center">
                    <Link href="/blog" className="btn">
                        See All Blogs
                    </Link>
                </div>
            </section>
        </LazyMotion>
    );
}