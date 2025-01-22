"use client";
import React, { useRef } from 'react';
import { LazyMotion, domAnimation, useInView } from 'framer-motion';
import ReactToPrint from 'react-to-print';
import { AiOutlineMail, AiOutlinePhone, AiOutlinePrinter } from 'react-icons/ai';
import { FaGraduationCap, FaTools, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';

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
    "Terraform & Infrastructure as Code",
    "Docker & Containerization",
    "ReactJS & NextJS",
    "Flask",
    "Postgres & MongoDB",
    ".NET & Blazor",
    "Entity Framework",
    "HPC Workload Management",
  ],

  experience: [
    {
      company: "Fischer Identity",
      role: "Software Engineer",
      period: "April 2024 - Present",
      location: "Naples, FL",
      description: [
        "Develop and refine the Blazor-based UI for Fischer Identity’s IAM portal, enhancing user experience and scalability for enterprise clients.",
        "Integrate .NET Core APIs with Entity Framework, improving authentication workflows, data integrity, and access management performance.",
        "Implement secure user onboarding, role-based access control (RBAC), and multi-factor authentication, aligning with corporate security best practices.",
      ],
    },
    {
      company: "Adaptive Computing",
      role: "Full-Stack Software Developer",
      period: "November 2023 - April 2024",
      location: "Naples, FL",
      description: [
        "Maintained and improved a sophisticated cloud resource manager application, introducing a streamlined image marketplace to expedite cluster deployments on AWS, Azure, and GCP.",
        "Integrated the E4S stack (121+ AI/ML and scientific tools) into HPC provisioning workflows, boosting HPC resource availability for complex workloads.",
        "Created demo websites and internal tools showcasing new product capabilities, contributing to elevated sales and customer engagement.",
      ],
    },
    {
      company: "100Devs",
      role: "Software Engineer Trainee",
      period: "Sep 2022 - Oct 2023",
      location: "Remote, USA",
      description: [
        "Collaborated on various front-end projects in a fast-paced environment, honing skills in responsive UI development and modern JavaScript frameworks.",
        "Mentored fellow trainees, establishing coding best practices and driving collective code quality improvements.",
        "Authored thorough documentation and testing protocols, ensuring maintainability and reducing defects across multiple codebases.",
        "Led code reviews and testing sessions to uphold reliability and deliver robust features under tight deadlines.",
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
        "Build a feature-rich Identity and Access Management portal that consolidates user provisioning, access requests, and authentication flows into a single, cohesive UI.",
        "Leverage Blazor for a responsive front end, integrating real-time notifications and seamless transitions for improved end-user experience.",
        "Enhance data interactions via Entity Framework in .NET, implementing query optimizations and transaction-safe data handling for mission-critical identity operations.",
        "Collaborate with the IAM infrastructure team to add advanced security measures like multi-factor authentication and role-based access control, meeting stringent enterprise requirements.",
        "Document integration approaches and coding patterns, accelerating onboarding for new developers and maintaining consistent code quality.",
      ],
    },
    {
      name: "Adaptive Computing Demo Website",
      role: "Full Stack Developer",
      period: "Jan 2024 - Feb 2024",
      location: "Naples, FL",
      description: [
        "Developed a user-friendly demonstration platform that showcases on-demand data center and HPC capabilities, including dynamic provisioning of E4S-based AI/ML clusters.",
        "Created an admin dashboard to manage demo accounts, track resource usage, and collect user feedback, significantly enhancing customer engagement.",
        "Utilized modern JavaScript (TypeScript), Next.js 14, and the Shadcn UI library for polished front-end experiences and maintainable code structure.",
        "Implemented secure sign-up and authentication flows, integrating Node-based microservices with MongoDB for data persistence and user session management.",
      ],
    },
    {
      name: "ODDC Cloud Resource Manager",
      role: "Full Stack Developer",
      period: "Nov 2023 - Feb 2024",
      location: "Naples, FL",
      description: [
        "Collaborated with a 10-person team to modernize a large-scale cloud resource manager, streamlining HPC cluster deployments with an innovative marketplace of pre-configured images.",
        "Refactored a complex codebase for improved clarity and maintainability, cutting technical debt and simplifying on-boarding for new developers.",
        "Expanded Terraform-based infrastructure to support multiple cloud providers, including AWS, Azure, GCP, and Oracle, enhancing product versatility.",
        "Implemented an integrated HPC workflow with the E4S stack, showcasing 121 specialized AI/ML and scientific packages for immediate user deployment.",
        "Contributed to iterative release cycles, ensuring top-notch reliability and performance for enterprise and research-focused HPC clients.",
      ],
    },
  ],
};

const Resume = () => {
  const resumeRef = useRef(null);
  const isInView = useInView(resumeRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="resume"
        className="section py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300
                   bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="max-w-5xl mx-auto" ref={resumeRef}>
          {/* Header / Intro */}
          <div
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="flex flex-col items-center text-center mb-8">
              <h1 className="text-3xl font-extrabold mb-1 dark:text-gray-100">
                {resumeData.name}
              </h1>
              <h2 className="text-xl text-gray-700 dark:text-gray-300">
                {resumeData.role}
              </h2>
              <div className="mt-4 flex flex-col sm:flex-row sm:space-x-6 dark:text-gray-400 text-gray-600">
                <span className="flex items-center">
                  <AiOutlineMail className="mr-1" />
                  {resumeData.email}
                </span>
                <span className="flex items-center">
                  <AiOutlinePhone className="mr-1" />
                  {resumeData.phone}
                </span>
              </div>

              <div className="mt-4">
                <ReactToPrint
                  trigger={() => (
                    <button
                      className="inline-flex items-center px-4 py-2 bg-neutral-200 dark:bg-neutral-700 
                                 text-gray-800 dark:text-gray-200 rounded 
                                 hover:bg-neutral-300 dark:hover:bg-neutral-600 
                                 transition-colors"
                    >
                      <AiOutlinePrinter className="mr-2" />
                      Print / Save PDF
                    </button>
                  )}
                  content={() => resumeRef.current}
                />
              </div>
            </div>

            {/* MAIN CONTENT WRAPPER */}
            <div className="space-y-8">
              {/* Education */}
              <div className="w-full mx-auto">
                <h3 className="text-2xl font-semibold mb-3 flex items-center dark:text-gray-100">
                  <FaGraduationCap className="mr-2" />
                  Education
                </h3>
                <div className="space-y-4">
                  {resumeData.education.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded border dark:border-neutral-700 
                                 bg-white dark:bg-neutral-800 
                                 transition-colors duration-300"
                    >
                      <h4 className="text-lg font-bold dark:text-gray-100">
                        {item.degree}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.institution} | {item.period} | {item.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center dark:text-gray-100">
                  <FaTools className="mr-2" />
                  Skills & Languages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div
                    className="p-4 rounded border dark:border-neutral-700 
                               bg-white dark:bg-neutral-800 
                               transition-colors duration-300"
                  >
                    <h4 className="text-lg font-bold mb-2 dark:text-gray-100">
                      Programming Languages
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {resumeData.programmingLanguages.map((language, index) => (
                        <li key={index}>{language}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="p-4 rounded border dark:border-neutral-700 
                               bg-white dark:bg-neutral-800 
                               transition-colors duration-300"
                  >
                    <h4 className="text-lg font-bold mb-2 dark:text-gray-100">
                      Technologies & Tools
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      {resumeData.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience (Card-Based Layout) */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center dark:text-gray-100">
                  <FaBriefcase className="mr-2" />
                  Experience
                </h3>
                <div className="space-y-6">
                  {resumeData.experience.map((expItem, index) => (
                    <div
                      key={index}
                      className="p-4 rounded border dark:border-neutral-700 
                                 bg-white dark:bg-neutral-800 
                                 transition-colors duration-300"
                    >
                      <h4 className="text-lg font-bold dark:text-gray-100">
                        {expItem.company}
                      </h4>
                      <p className="text-sm italic text-gray-600 dark:text-gray-300 mb-2">
                        {expItem.role} — {expItem.period} — {expItem.location}
                      </p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        {expItem.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center dark:text-gray-100">
                  <FaProjectDiagram className="mr-2" />
                  Projects
                </h3>
                <div className="space-y-6">
                  {resumeData.projects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 rounded border dark:border-neutral-700 
                                 bg-white dark:bg-neutral-800 
                                 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-bold dark:text-gray-100">
                          {project.name}
                        </h4>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
                        {project.role} - {project.location}
                      </p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        {project.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* END MAIN CONTENT */}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Resume;