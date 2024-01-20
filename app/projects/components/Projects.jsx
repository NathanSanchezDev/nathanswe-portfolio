import { ProjectItem } from '../../sections/project/ProjectItem'; // Adjust the path according to your file structure
export function Projects({ projects }) {
    if (!Array.isArray(projects)) {
        console.error("Projects prop is not an array:", projects);
        return <div>No projects to display.</div>;
    }

    // Sort by 'createdAt' if it's a valid date field in your data
    const projectItems = projects
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((project, index) => {
            if (project._id) {
                return <ProjectItem key={project._id} project={project} index={index} />;
            } else {
                console.error("Project is missing _id:", project);
                return null;
            }
        });

    return <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">{projectItems}</div>;
}
