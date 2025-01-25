"use client";

import React, { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

const HeadingDivider = ({ title }) => (
	<div className="w-full flex flex-col gap-2">
		<h2 className="text-3xl font-bold">
			{title}
		</h2>
		<div className="h-1 w-32 bg-blue-500 rounded" />
	</div>
);

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const animationStyles = {
		transform: isInView ? "none" : "translateX(-200px)",
		opacity: isInView ? 1 : 0,
		transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
	};

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />

				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						ref={ref}
						tabIndex="0"
						className="text-xl font-light leading-relaxed space-y-6"
						style={animationStyles}
					>
						<p>
							I&apos;m Nathan Sanchez, a Software Engineer focused on building
							scalable solutions across the full technology stack. I specialize
							in creating efficient systems that combine technical excellence
							with exceptional user experience.
						</p>

						<p>
							My expertise centers on cloud-native architectures and modern
							technologies including .NET Core, TypeScript, and Go. I&apos;ve
							developed everything from distributed systems to responsive
							front-end applications, embracing the full scope of software
							development.
						</p>

						<p>
							Throughout my career, I&apos;ve led enterprise system development
							and maintained active involvement in open-source projects.
							This includes building developer tools, optimizing large-scale
							applications, and implementing robust cloud infrastructure.
						</p>

						<p>
							Currently, I&apos;m focused on advancing cloud architectures and
							contributing to the developer community through open-source
							work. I remain committed to continuous learning and technical
							innovation in software development.
						</p>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}