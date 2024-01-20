"use client";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import { Filter } from "./components/Filter";
import Error from "../error";
import { Projects } from "./components/Projects";

// Import your local projects data
import { projectsData } from '../../constants/projectsData';

export default function Page() {
	const [category, setCategory] = useState(undefined);

	const filteredProjects = category 
		? projectsData.filter(project => project.category === category)
		: projectsData;

	const onClick = (catName) => setCategory(catName);

	return (
		<div className="container-md">
			<section id="projects" className="section">
				<HeadingDivider title="Relevant projects" />

				<Filter onClick={onClick} />

				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					<ErrorBoundary FallbackComponent={Error}>
						{filteredProjects.length === 0 ? (
							// Empty state
							<div className="flex-center">
								<h3 className="text-2xl">No projects found in {category} category</h3>
							</div>
						) : (
							<Projects projects={filteredProjects} />
						)}
					</ErrorBoundary>
				</Suspense>
			</section>
		</div>
	);
}
