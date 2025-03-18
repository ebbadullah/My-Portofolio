import { Data } from "../assets/Data/Data"
import { ExternalLinkIcon, GithubIcon } from "./Icons"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React and Tailwind CSS.",
      image: Data[0],
      tags: ["React", "Tailwind CSS", "Firebase"],
      liveLink: "https://royal-food-ibmo.vercel.app/",
      githubLink: "https://github.com/ebbadullah/royal-food",
    },
    {
      id: 2,
      title: "Real Time Chat-App",
      description: "A real-time chat application built with React, Firebase, and Tailwind CSS",
      image: Data[1],
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://quickchatzone.vercel.app/",
      githubLink: "https://github.com/ebbadullah/Chat-app",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my skills and projects.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <div className="py-20 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-12">
        Here are some of my recent projects. Each project represents my skills and experience in frontend development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-transform hover:-translate-y-2"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

