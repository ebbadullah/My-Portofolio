import { useState, useEffect, useRef } from "react"
import { ExternalLinkIcon, GithubIcon } from "./Icons"
import { Data } from "../assets/Data/Data"

// Chevron Icons directly yahan define karte hain
const ChevronLeftIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
)

const ChevronRightIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
)

export default function Projects() {
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
        },
        {
            id: 7,
            title: "New Blogify App",
            description: "A blog application built with MERN stack",
            image: Data[7],
            tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
            liveLink: "https://new-blogify-app.vercel.app/",
            githubLink: "https://github.com/ebbadullah/Blogify-MERN",
            featured: true,
        },
        {
            id: 8,
            title: "New Todo App Pro",
            description: "A todo application built with React and Tailwind CSS",
            image: Data[8],
            tags: ["React", "Tailwind CSS"],
            liveLink: "https://new-toodo-list.netlify.app/",
            githubLink: "https://github.com/ebbadullah/React-TodoApp",
            featured: true,
        },{
            id: 9,
            title: "Techzone Learning Feedback App",
            description: "A feedback application built with MERN stack",
            image: Data[6],
            tags: ["React", "Tailwind CSS", "Express", "MongoDB"],
            liveLink: "https://techzone-learning-feedbackapp.netlify.app/",
            githubLink: "https://github.com/ebbadullah/FeedbackApp",
            featured: true,
        }
    ])

    const [activeFilter, setActiveFilter] = useState("all")
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isInView, setIsInView] = useState(false)
    const sliderRef = useRef(null)
    const filters = ["all", "React", "Javascript", "HTML,CSS"]

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
        setCurrentIndex(0)
    }, [activeFilter, projects])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
        )
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="py-20 px-6 md:px-12 lg:px-24 relative" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
                        My Projects
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed text-lg">
                        Here are some of my recent projects. Each project represents my skills and experience in frontend development.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === filter 
                                ? "bg-blue-600 text-white dark:bg-blue-700 shadow-lg" 
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                            }`}
                        >
                            {filter === "all" ? "All Projects" : filter}
                        </button>
                    ))}
                </div>

                {/* Slider Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-gray-700"
                    >
                        <ChevronLeftIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </button>

                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-gray-700"
                    >
                        <ChevronRightIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </button>

                    {/* Slider */}
                    <div 
                        ref={sliderRef}
                        className="overflow-hidden rounded-2xl"
                    >
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {filteredProjects.map((project, index) => (
                                <div 
                                    key={project.id}
                                    className="w-full flex-shrink-0"
                                >
                                    <div className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 mx-4 ${
                                        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                    } transition-all duration-500`}
                                    style={{ transitionDelay: `${index * 100}ms` }}>
                                        <div className="flex flex-col lg:flex-row min-h-[500px]">
                                            <div className="lg:w-1/2 relative overflow-hidden group">
                                                <img 
                                                    src={project.image || "/placeholder.svg"} 
                                                    alt={project.title} 
                                                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                                />
                                                {project.featured && (
                                                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                        Featured
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                            </div>

                                            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {project.tags.map((tag) => (
                                                            <span 
                                                                key={tag} 
                                                                className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <a 
                                                        href={project.liveLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex-1 justify-center"
                                                    >
                                                        <ExternalLinkIcon className="h-4 w-4" />
                                                        Live Demo       


                                                        +
                                                    </a>

                                                    <a 
                                                        href={project.githubLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 flex-1 justify-center"
                                                    >
                                                        <GithubIcon className="h-4 w-4" />
                                                        Code
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {filteredProjects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                    ? "bg-blue-600 w-8" 
                                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute -right-20 -top-20 -z-10 opacity-5 dark:opacity-5">
                <svg width="300" height="300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
                </svg>
            </div>
        </div>
    )
}