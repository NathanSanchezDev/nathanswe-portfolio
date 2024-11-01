import React, { useRef } from 'react';
import { LazyMotion, domAnimation, useInView } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const resumeData = {
  name: "Nathan Sanchez",
  role: "Full-Stack Software Developer",
  email: "nathan1220sanchez@gmail.com",
  phone: "+1 239-385-2676",
  education: [
    {
      degree: "Computer Networking",
      institution: "Lorenzo Walker Technical Institution",
      period: "May 2016 - Apr 2017",
      location: "Naples, FL",
    },
    {
      degree: "Computer Programming",
      institution: "Lorenzo Walker Technical Institution",
      period: "May 2017 - Apr 2018",
      location: "Naples, FL",
    },
  ],
  programmingLanguages: ["Python", "JavaScript", "TypeScript", ".NET (C#)"],
  skills: [
    "AWS (EC2, ELB, etc.)",
    "Terraform",
    "Docker",
    "ReactJS",
    "NextJS",
    "Flask",
    "Postgres",
    "MongoDB",
    ".NET",
    "Blazor",
    "Entity Framework",
  ],
  experience: [
    {
      company: "Fischer Identity",
      role: "Software Engineer",
      period: "April 2024 - Present",
      location: "Naples, FL",
      description: [
        "Developing and maintaining the UI for Fischer Identity’s IAM portal as part of the DotNet team, with a focus on enhancing user experience using Blazor for the frontend and Entity Framework for backend data management.",
        "Collaborating closely with backend engineers to ensure seamless integration with the IAM infrastructure.",
        "Implementing secure user authentication mechanisms and improving the overall design of the portal to streamline user workflows using .NET technologies."
      ],
    },
    {
      company: "Adaptive Computing",
      role: "Full-Stack Software Developer",
      period: "November 2023 - April 2024",
      location: "Naples, FL",
      description: [
        "Maintained and enhanced a cloud resource manager application, introducing an innovative image marketplace for the top 3 cloud providers, streamlining access and deployment for users.",
        "Led the integration of the E4S image, comprising 121 AI/ML and scientific workload tools, into our platform, enhancing HPC resource provisioning and user capabilities.",
        "Developed tools and websites to promote new product releases, significantly contributing to sales efforts and product visibility in competitive markets.",
      ],
    },
    {
      company: "100Devs",
      role: "Software Engineer Trainee",
      period: "Sep 2022 - Oct 2023",
      location: "Remote, USA",
      description: [
        "Engaged in front-end development for diverse projects, collaborating closely with teams to ensure timely completion and high-quality outcomes.",
        "Provided mentorship to trainees and junior developers on software development practices, enhancing team skills and project efficiency.",
        "Contributed to significant documentation efforts, ensuring comprehensive coverage of project features and guidelines for tool usage.",
        "Led rigorous testing processes for projects, guaranteeing reliability and optimal performance of software solutions developed.",
      ],
    },
  ],
  projects: [
    {
      name: "Fischer Identity IAM Portal",
      role: "Full Stack Developer",
      period: "April 2024 - Present",
      location: "Naples, FL",
      description: [
        "Developing a comprehensive Identity and Access Management (IAM) portal, allowing users to manage access rights, streamline user authentication, and improve security across enterprise environments.",
        "Utilizing Blazor for a responsive and intuitive front-end experience, enhancing user interactions with real-time updates and seamless navigation.",
        "Leveraging Entity Framework in .NET for robust data management, ensuring secure and efficient backend operations.",
        "Collaborating with backend teams to implement complex IAM features such as multi-factor authentication, role-based access control (RBAC), and user provisioning.",
        "Contributing to the integration of secure authentication protocols and APIs, supporting secure and scalable infrastructure within the portal."
      ],
    },
    {
      name: "Adaptive Computing Demo Website",
      role: "Full Stack Developer",
      period: "Jan 2024 - Feb 2024",
      location: "Naples, FL",
      description: [
        "Developed a full-stack web application allowing users to demo cloud-based solutions for Adaptive Computing’s on-demand data center, and on-premise solution for demoing E4S for AI/ML workloads.",
        "Designed an admin dashboard to track demo account statuses and facilitate user interaction, enhancing user experience and feedback management.",
        "Leveraged modern technologies such as MongoDB, Next.js 14, TypeScript, and the Shadcn component library for UI development.",
        "Ensured scalability and reliability for both cloud and on-premise solutions, incorporating advanced database management and secure user authentication.",
      ],
    },
    {
      name: "ODDC Cloud Resource Manager",
      role: "Full Stack Developer",
      period: "Nov 2023 - Feb 2024",
      location: "Naples, FL",
      description: [
        "Collaborated with a 10-member development team on the ODDC Cloud Resource Manager project by Adaptive Computing.",
        "Significantly refactored and streamlined a complex codebase, reducing code complexity and improving overall efficiency.",
        "Introduced a Marketplace feature, enabling users to deploy clusters with pre-built images. Focused on seamless integration of the E4S image containing 121 scientific and AI/ML apps and tools.",
        "Collaborated on infrastructure enhancements using Terraform, expanding support for custom images and multiple cloud providers (AWS, Azure, GCP, Oracle, AliCloud, Open Telecom Cloud).",
        "Played a key role in delivering new releases and maintaining project stability, contributing to the project’s ongoing success.",
      ],
    },
  ],
};

const Resume = () => {
  const resumeRef = useRef(null);
  const isInView = useInView(resumeRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="resume" className="section">
        <div className="max-w-4xl mx-auto">
          <div
            ref={resumeRef}
            className={`text-xl font-light leading-relaxed transition-all ${
              isInView ? '' : 'transform translate-x-8 opacity-0'
            }`}
          >
            {/* Education */}
            <h3 className="text-2xl font-semibold">Education</h3>
            <ul className="ml-5 mt-2 list-none">
              {resumeData.education.map((item, index) => (
                <li key={index}>
                  {item.degree} - {item.institution} ({item.period}, {item.location})
                </li>
              ))}
            </ul>
            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="text-xl font-semibold">Programming Languages</h3>
                <ul className="list-none ml-5 mt-2">
                  {resumeData.programmingLanguages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Skills</h3>
                <ul className="list-none ml-5 mt-2">
                  {resumeData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Experience */}
            <hr className="my-8 border-t-2 border-gray-300" />
            <h3 className="text-2xl font-semibold">Experience</h3>
            {resumeData.experience.map((item, index) => (
              <div key={index} className="mt-4">
                <h4 className="text-lg font-semibold">{item.company}</h4>
                <p>{item.role} - {item.period} - {item.location}</p>
                <ul className="list-disc ml-5 mt-2">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Projects */}
            <hr className="my-8 border-t-2 border-gray-300" />
            <h3 className="text-2xl font-semibold">Projects</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="mt-4">
                <h4 className="text-lg font-semibold">{project.name}</h4>
                <p>{project.role} - {project.period} - {project.location}</p>
                <ul className="list-disc ml-5 mt-2">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Resume;