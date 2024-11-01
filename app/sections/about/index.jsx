"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I’m Nathan Sanchez, a Software Engineer with a strong focus on Full-Stack development and a specialization in .NET and cloud-based solutions.
						</p>
						<p>
							Since 2022, my passion for web development has led me to dive into a variety of technologies, with a core emphasis on building scalable, user-focused applications.
						</p>
						<p>
							I began as a Freelance Frontend Developer, primarily working with JavaScript frameworks like React.js. Over time, I expanded into full-stack development, building complete web solutions that integrate frontend and backend seamlessly.
						</p>
						<p className="my-3.5">
							Throughout 2023, I deepened my expertise in .NET and Blazor, taking on complex projects that required both backend and frontend solutions, as well as experience in cloud infrastructure.
						</p>
						<p>
							Today, I continue to evolve, focusing on cloud computing, advanced front-end frameworks, and delivering intuitive, efficient applications tailored to client needs.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
