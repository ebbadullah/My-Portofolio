"use client"

import { useState, useEffect } from "react"
import { ExternalLinkIcon, GithubIcon } from "./icons"
import { Data } from "../assets/Data/Data"

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React and Tailwind CSS.",
      image: Data[0],
      tags: ["React", "Tailwind CSS", "Firebase"],
      liveLink: "https://royal-food-ibmo.vercel.app/",
      githubLink: "https://github.com/ebbadullah/royal-food",
      featured: true,
    },
    {
      id: 2,
      title: "Real Time Chat-App",
      description: "A real-time chat application built with React, Firebase, and Tailwind CSS",
      image: Data[1],
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://quickchatzone.vercel.app/",
      githubLink: "https://github.com/ebbadullah/Chat-app",
      featured: true,
    },
    {
      id: 3,
      title: "Modren E-Commerce Website",
      description: "A modern portfolio website showcasing my skills and projects.",
      image: Data[2],
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
  ])

  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.tags.includes(activeFilter)))
    }
  }, [activeFilter, projects])

  const filters = ["all", "React", "Tailwind CSS", "Firebase"]

  return (
    <div className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
          My Projects
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
          Here are some of my recent projects. Each project represents my skills and experience in frontend development.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white dark:bg-blue-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {filter === "all" ? "All" : filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </div>
                )}
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
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
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

      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 -z-10 opacity-5 dark:opacity-5">
        <svg width="300" height="300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
        </svg>
      </div>
    </div>
  )
}

