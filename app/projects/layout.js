"use client";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import { Filter } from "./components/Filter";
import Error from "../error";
import { Projects } from "./components/Projects";
import { projectsData } from '../../constants/projectsData';

export default function Page() {
    const [filter, setFilter] = useState(undefined);

    const filteredProjects = filter 
        ? projectsData.filter(project => {
            if (project.category === filter) return true;
            return project.stack.some(tech => tech === filter || tech.includes(filter));
        })
        : projectsData;

    const onClick = (filterName) => setFilter(filterName);

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
                            <div className="flex-center">
                                <h3 className="text-2xl">No projects found in {filter} category</h3>
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