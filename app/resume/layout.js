"use client";
import React from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import Error from "../error";
import Resume from "./components/Resume"; // Import your Resume component

export default function Layout() {
	return (
		<div className="container-md">
			<section id="resume" className="section">
				<HeadingDivider title="My Resume" />
				
				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					<ErrorBoundary FallbackComponent={Error}>
						<Resume />
					</ErrorBoundary>
				</Suspense>
			</section>
		</div>
	);
}