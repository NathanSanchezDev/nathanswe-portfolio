"use client";
import React from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import Error from "../error";
import Blog from "./components/Blog";

export default function Layout() {
	return (
		<div className="container-md">
			<section id="blog" className="section">
				<HeadingDivider title="My Blog" />
				
				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					<ErrorBoundary FallbackComponent={Error}>
					</ErrorBoundary>
                    <Blog/>
				</Suspense>
			</section>
		</div>
	);
}