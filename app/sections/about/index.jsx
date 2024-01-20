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
  I am Nathan Sanchez, a dedicated Software Engineer with a strong emphasis on cloud solutions and Full-Stack development using NextJS.
</p>
<p>
  My passion for web development has driven me since 2022, leading me to explore diverse technologies and refine my skills in creating scalable web applications.
</p>
<p>
  Beginning my journey as a Freelance Frontend Developer, I quickly expanded my expertise to encompass full-stack projects, focusing on JavaScript frameworks like React.js.
</p>
<p className="my-3.5">
  In 2023, I delved deeper into Full-Stack development, embracing the challenges of both backend and frontend technologies to build comprehensive web solutions.
</p>
<p>
  Today, I continue to grow, focusing on cloud computing and advanced front-end technologies to deliver innovative and user-centric applications.
</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
