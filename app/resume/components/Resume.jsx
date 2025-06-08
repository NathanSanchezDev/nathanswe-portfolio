"use client";
import React, { useRef } from 'react';
import { LazyMotion, domAnimation, useInView } from 'framer-motion';
import ReactToPrint from 'react-to-print';
import { AiOutlineMail, AiOutlinePrinter } from 'react-icons/ai';
import { FaGraduationCap, FaTools, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import { BsGithub, BsLinkedin, BsGlobe } from 'react-icons/bs';

import 'tailwindcss/tailwind.css';

const resumeData = {
  name: "Nathan Sanchez",
  location: "Naples, FL",
  email: "nathan1220sanchez@gmail.com",
  linkedin: "linkedin.com/in/nathansanchez239",
  github: "github.com/NathanSanchezDev",
  website: "nathanswe.com",

  summary: "Backend-leaning full-stack engineer with experience building performant APIs and production infrastructure in Go, .NET, and PostgreSQL. Proven ability to own features end-to-end and build tooling that supports team efficiency. Specializes in modernizing legacy systems, implementing enterprise security, and creating developer productivity tools.",

  experience: [
    {
      company: "Fischer Identity",
      role: "Software Engineer",
      period: "April 2024 – Present",
      location: "Naples, FL",
      achievements: [
        "Modernizing enterprise IAM platform with role-based access controls supporting 10,000+ enterprise users",
        "Migrating admin and self-service capabilities from legacy Tomcat services into modern Blazor + .NET Core portal",
        "Built reusable frontend components for dynamic form rendering and identity-based workflow automation",
        "Implemented granular access control features supporting Admin, Delegated Admin, and End User roles",
        "Developed PowerShell CLI tools automating local environments with Docker, LocalStack, and real-time log tailing",
        "Designed JWT-authenticated API endpoints maintaining interoperability with legacy Tomcat infrastructure"
      ]
    },
    {
      company: "Adaptive Computing",
      role: "Full Stack Software Developer",
      period: "October 2023 – April 2024",
      location: "Naples, FL",
      achievements: [
        "Maintained HPC Cloud On-Demand platform supporting multi-cloud orchestration across AWS, Azure, GCP, and Oracle",
        "Built Go service managing ephemeral demo sessions with JWT parsing, SSH credential creation, and lifecycle cleanup",
        "Optimized React cluster UI and MongoDB queries for improved performance and user experience",
        "Reduced AWS infrastructure costs by 30% through automated resource cleanup tools across development teams",
        "Participated in CI/CD cycles and infrastructure reliability improvements for cloud bursting deployment scenarios",
        "Co-developed Next.js demo portal with MongoDB backend and secure iframe delivery for infrastructure simulation"
      ]
    },
    {
      company: "100Devs",
      role: "Full Stack Developer (Apprenticeship)",
      period: "2022 – 2023",
      location: "Remote",
      achievements: [
        "Completed full-stack program covering React, Node.js, and MongoDB in a collaborative peer-led environment",
        "Delivered freelance projects for restaurant and solar company clients with UI forms and backend integrations",
        "Mentored junior developers and led development sprints for production-ready applications",
        "Gained hands-on experience with Git workflows, REST API development, and collaborative debugging practices"
      ]
    }
  ],

  projects: [
    {
      name: "Go-Insight – Distributed Observability Platform",
      period: "2024",
      technologies: "Go, PostgreSQL, Docker, Kubernetes",
      achievements: [
        "Engineered high-performance observability system achieving sub-10ms query times using PostgreSQL with strategic indexing",
        "Built secure REST APIs with rate limiting and authentication, supporting 100+ concurrent clients through thread-safe handlers",
        "Designed distributed trace lifecycle with parent-child span relationships for microservice monitoring",
        "Implemented comprehensive filtering, pagination, and real-time log correlation across services",
        "Created production-ready deployment with Docker containerization, migration tooling, and detailed documentation"
      ]
    },
    {
      name: "AIHelperLibrary – Multi-Provider AI SDK for .NET",
      period: "2024",
      technologies: "C#, .NET Core, OpenAI, Anthropic, NuGet",
      achievements: [
        "Developed unified SDK supporting OpenAI and Anthropic Claude models with consistent request handling",
        "Implemented advanced prompt workflows with multi-turn chat, dynamic memory, and intelligent parameter tuning",
        "Built enterprise features including retry logic, proxy support, and automatic model-specific parameter optimization",
        "Created comprehensive testing console with model selection, session history, and real-time validation",
        "Published to NuGet with extensive documentation and examples, adopted by 500+ developers"
      ]
    }
  ],

  technicalSkills: {
    backend: ["Go", ".NET Core", "PostgreSQL", "REST APIs", "JWT Auth", "Node.js"],
    frontend: ["React", "Blazor", "Next.js", "TypeScript", "HTML", "CSS"],
    infrastructure: ["Docker", "Kubernetes", "GitHub Actions", "PowerShell CLI"],
    databases: ["PostgreSQL", "MongoDB", "SQL Server"],
    cloudTools: ["AWS", "Azure", "GCP", "LocalStack", "Git", "Postman", "SSH"]
  }
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
          {/* Header */}
          <div
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="flex flex-col items-center text-center mb-8">
              <h1 className="text-4xl font-extrabold mb-2 dark:text-gray-100">
                {resumeData.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {resumeData.location}
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="flex items-center">
                  <AiOutlineMail className="mr-1" />
                  <a href={`mailto:${resumeData.email}`} className="hover:text-blue-500">
                    {resumeData.email}
                  </a>
                </span>
                <span className="flex items-center">
                  <BsLinkedin className="mr-1" />
                  <a href={`https://${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    {resumeData.linkedin}
                  </a>
                </span>
                <span className="flex items-center">
                  <BsGithub className="mr-1" />
                  <a href={`https://${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    {resumeData.github}
                  </a>
                </span>
                <span className="flex items-center">
                  <BsGlobe className="mr-1" />
                  <a href={`https://${resumeData.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    {resumeData.website}
                  </a>
                </span>
              </div>

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

            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 flex items-center dark:text-gray-100">
                Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center dark:text-gray-100">
                <FaBriefcase className="mr-2" />
                Experience
              </h3>
              <div className="space-y-6">
                {resumeData.experience.map((job, index) => (
                  <div
                    key={index}
                    className="p-4 rounded border dark:border-neutral-700 
                               bg-white dark:bg-neutral-800 
                               transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold dark:text-gray-100">
                          {job.role}
                        </h4>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {job.period}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {job.location}
                        </p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center dark:text-gray-100">
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
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold dark:text-gray-100">
                        {project.name}
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
                      {project.technologies}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center dark:text-gray-100">
                <FaTools className="mr-2" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {Object.entries(resumeData.technicalSkills).map(([category, skills]) => (
                  <div
                    key={category}
                    className="p-4 rounded border dark:border-neutral-700 
                               bg-white dark:bg-neutral-800 
                               transition-colors duration-300"
                  >
                    <h4 className="text-lg font-bold mb-2 dark:text-gray-100 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 
                                     text-blue-800 dark:text-blue-200 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Resume;