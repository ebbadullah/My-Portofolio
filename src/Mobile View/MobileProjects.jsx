import { useState, useEffect } from "react"
import { ExternalLinkIcon, GithubIcon } from "../Components/Icons"
import { Data } from "../assets/Data/Data"

export default function MobileProjects() {
    const [projects] = useState([
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
            title: "Brain Teaser Quiz",
            description: "A quiz application built with React, Tailwind CSS",
            image: Data[2],
            tags: ["React", "Tailwind CSS"],
            liveLink: "https://brain-teaser-quiz.netlify.app/",
            githubLink: "https://github.com/ebbadullah/Brain-Teaser-Quiz",
            featured: true,
        },
        {
            id: 4,
            title: "Modern Memory Card Game",
            description: "A memory card game built with React, Tailwind CSS",
            image: Data[4],
            tags: ["HTML", "CSS", "Javascript"],
            liveLink: "https://modren-memory-card-game.netlify.app/",
            githubLink: "https://github.com/ebbadullah/Memory-Card-Game",
            featured: true,
        },
        {
            id: 5,
            title: "Recipe Finder App",
            description: "A recipe finder application built with React, Tailwind CSS",
            image: Data[5],
            tags: ["HTML", "CSS", "Javascript"],
            liveLink: "https://modern-recipe-finder.netlify.app/",
            githubLink: "https://github.com/ebbadullah/Recipe-Finder",
            featured: true,
        },
        {
            id: 6,
            title: "Weather-App",
            description: "A weather application built with React, Tailwind CSS",
            image: Data[3],
            tags: ["HTML", "CSS", "Javascript"],
            liveLink: "https://modern-weather-a1.netlify.app/",
            githubLink: "https://github.com/ebbadullah/Weather-App",
            featured: true,
        }
    ])

    const [activeFilter, setActiveFilter] = useState("all")
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [isInView, setIsInView] = useState(false)
    const filters = ["all", "React", "Tailwind CSS", "Firebase"]

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.1 })
        const element = document.getElementById("projects")
        if (element) observer.observe(element)
        return () => { if (element) observer.unobserve(element) }
    }, [])

    useEffect(() => {
        if (activeFilter === "all") {
            setFilteredProjects(projects)
        } else {
            setFilteredProjects(projects.filter((project) => project.tags.includes(activeFilter)))
        }
    }, [activeFilter, projects])

    return (
        <div className="py-12 px-4 relative">
            <div className="mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative inline-block">
                    My Projects
                    <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                    Here are some of my recent projects. Each project represents my skills and experience in frontend development.
                </p>

                <div className="flex overflow-x-auto pb-2 mb-6 hide-scrollbar">
                    <div className="flex gap-2 min-w-max">
                        {filters.map((filter) => (
                            <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === filter ? "bg-blue-600 text-white dark:bg-blue-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"}`}>
                                {filter === "all" ? "All" : filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="relative h-40 overflow-hidden">
                                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
                                {project.featured && <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">Featured</div>}
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full">{tag}</span>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex-1 justify-center">
                                        <ExternalLinkIcon className="h-3 w-3" />
                                        Live Demo
                                    </a>

                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex-1 justify-center">
                                        <GithubIcon className="h-3 w-3" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}